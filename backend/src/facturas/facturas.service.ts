import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import PDFDocument from 'pdfkit';

@Injectable()
export class FacturasService {
  constructor(private prisma: PrismaService) {}

  // 1. GENERAR FACTURA ELECTRÓNICA (Con descuento de Stock automático)
  async crearFactura(
    dto: CreateFacturaDto,
    idTienda: number,
    idUsuario: number,
  ) {
    try {
      // 1. REGLA DE ORO: Validar y recalcular el total en el backend de forma matemática
      let totalRealCalculado = 0;
      for (const prod of dto.productos) {
        totalRealCalculado += prod.cantidad * prod.precio_unitario;
      }

      // Comparamos el total enviado por el frontend con la realidad matemática del backend
      if (Math.abs(totalRealCalculado - dto.total) > 0.01) {
        throw new BadRequestException(
          `Descuadre de caja detectado. El total enviado ($${dto.total}) no coincide con la suma real de los productos ($${totalRealCalculado}).`,
        );
      }

      return await this.prisma.$transaction(async (tx) => {
        // Crear cabecera de la factura con el total blindado
        const nuevaFactura = await tx.factura.create({
          data: {
            numero_factura: dto.numero_factura,
            fecha: new Date(),
            total: totalRealCalculado, // Usamos el valor real calculado por seguridad
            id_usuario: idUsuario,
            id_cliente: Number(dto.id_cliente),
            id_tienda: idTienda,
            id_pago: Number(dto.id_pago),
          },
        });

        // Registrar los detalles y restar stock uno por uno
        for (const prod of dto.productos) {
          const productoDb = await tx.productos.findUnique({
            where: { id_producto: prod.id_producto },
          });
          if (!productoDb || Number(productoDb.stock) < prod.cantidad) {
            throw new BadRequestException(
              `Stock insuficiente para el producto ID ${prod.id_producto}.`,
            );
          }

          await tx.detalle_factura.create({
            data: {
              cantidad: prod.cantidad,
              precio_unitario: prod.precio_unitario,
              subtotal: prod.cantidad * prod.precio_unitario,
              id_factura: nuevaFactura.id_factura,
              id_producto: prod.id_producto,
            },
          });

          await tx.productos.update({
            where: { id_producto: prod.id_producto },
            data: { stock: { decrement: prod.cantidad } },
          });
        }

        return {
          ok: true,
          mensaje: 'Factura electrónica emitida con éxito.',
          id_factura: nuevaFactura.id_factura,
          numero_factura: nuevaFactura.numero_factura,
        };
      });
    } catch (error: any) {
      // CAPTURAMOS EL ERROR P2002: Llave única duplicada (Número de factura repetido)
      if (error.code === 'P2002') {
        throw new BadRequestException(
          `El número de factura '${dto.numero_factura}' ya fue emitido previamente. Use una numeración consecutiva diferente.`,
        );
      }

      // CAPTURAMOS EL ERROR P2003: Llave foránea inválida (Clientes o pagos inexistentes)
      if (error.code === 'P2003') {
        throw new BadRequestException(
          `Error de integridad: El id_cliente (${dto.id_cliente}) o el id_pago (${dto.id_pago}) no existen en el sistema.`,
        );
      }

      throw error;
    }
  }

  // 2. VER VENTAS Y FILTRAR POR RANGO DE FECHAS
  async listarYFiltrar(
    idTienda: number,
    fechaInicio?: string,
    fechaFin?: string,
  ) {
    const filtro: any = { id_tienda: idTienda };

    if (fechaInicio && fechaFin) {
      filtro.fecha = {
        gte: new Date(`${fechaInicio}T00:00:00.000Z`),
        lte: new Date(`${fechaFin}T23:59:59.999Z`),
      };
    }

    return await this.prisma.factura.findMany({
      where: filtro,
      include: {
        clientes: { select: { nombre_cliente: true, documento_cliente: true } },
        usuarios: { select: { nombre: true } }, // Nombre del cajero que vendió
      },
      orderBy: { fecha: 'desc' },
    });
  }

  // 3. ESTADÍSTICAS Y REPORTE DE PERIODO (Suma de totales)
  async obtenerEstadisticas(
    idTienda: number,
    fechaInicio: string,
    fechaFin: string,
  ) {
    const ventas = await this.listarYFiltrar(idTienda, fechaInicio, fechaFin);

    // Sumamos todos los totales usando código JavaScript limpio
    const totalVendido = ventas.reduce(
      (sum, fact) => sum + Number(fact.total),
      0,
    );
    const cantidadFacturas = ventas.length;

    return {
      periodo: { desde: fechaInicio, hasta: fechaFin },
      total_ingresos: totalVendido,
      total_ventas_realizadas: cantidadFacturas,
    };
  }

  // GENERACIÓN DINÁMICA DEL PDF EN MEMORIA
  async generarPdfFactura(
    idFactura: number,
    idTienda: number,
  ): Promise<Buffer> {
    const factura = await this.prisma.factura.findFirst({
      where: { id_factura: idFactura, id_tienda: idTienda },
      include: {
        clientes: true,
        tiendas: true,
        detalle_factura: { include: { productos: true } },
      },
    });

    if (!factura)
      throw new NotFoundException('La factura solicitada no existe.');

    return new Promise((resolve) => {
      const doc = new PDFDocument({ margin: 50 });
      const chunks: Buffer[] = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));

      // Diseño del PDF
      doc
        .fontSize(20)
        .text(factura.tiendas.nombre_tienda.toUpperCase(), { align: 'center' });
      doc.fontSize(10).text(`NIT: ${factura.tiendas.nit}`, { align: 'center' });
      doc.moveDown();

      doc.fontSize(14).text(`FACTURA ELECTRÓNICA: ${factura.numero_factura}`, {
        underline: true,
      });
      doc.fontSize(10).text(`Fecha: ${factura.fecha.toLocaleDateString()}`);
      doc.text(
        `Cliente: ${factura.clientes.nombre_cliente} (${factura.clientes.documento_cliente})`,
      );
      doc.moveDown();

      doc.text(
        '---------------------------------------------------------------------------------',
        { align: 'center' },
      );
      doc.text(
        'Producto                          Cant.        Precio Un.       Subtotal',
      );
      doc.text(
        '---------------------------------------------------------------------------------',
        { align: 'center' },
      );

      factura.detalle_factura.forEach((det) => {
        doc.text(
          `${det.productos.nombre_producto.substring(0, 25).padEnd(28)} ${det.cantidad.toString().padEnd(12)} $${det.precio_unitario.toString().padEnd(14)} $${det.subtotal}`,
        );
      });

      doc.moveDown();

      doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text(`TOTAL A PAGAR: $${factura.total}`, { align: 'right' });

      doc.end();
    });
  }
}
