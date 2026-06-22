"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const pdfkit_1 = __importDefault(require("pdfkit"));
let FacturasService = class FacturasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearFactura(dto, idTienda, idUsuario) {
        try {
            let totalRealCalculado = 0;
            for (const prod of dto.productos) {
                totalRealCalculado += prod.cantidad * prod.precio_unitario;
            }
            if (Math.abs(totalRealCalculado - dto.total) > 0.01) {
                throw new common_1.BadRequestException(`Descuadre de caja detectado. El total enviado ($${dto.total}) no coincide con la suma real de los productos ($${totalRealCalculado}).`);
            }
            return await this.prisma.$transaction(async (tx) => {
                const nuevaFactura = await tx.factura.create({
                    data: {
                        numero_factura: dto.numero_factura,
                        fecha: new Date(),
                        total: totalRealCalculado,
                        id_usuario: idUsuario,
                        id_cliente: Number(dto.id_cliente),
                        id_tienda: idTienda,
                        id_pago: Number(dto.id_pago),
                    },
                });
                for (const prod of dto.productos) {
                    const productoDb = await tx.productos.findUnique({
                        where: { id_producto: prod.id_producto },
                    });
                    if (!productoDb || Number(productoDb.stock) < prod.cantidad) {
                        throw new common_1.BadRequestException(`Stock insuficiente para el producto ID ${prod.id_producto}.`);
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
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException(`El número de factura '${dto.numero_factura}' ya fue emitido previamente. Use una numeración consecutiva diferente.`);
            }
            if (error.code === 'P2003') {
                throw new common_1.BadRequestException(`Error de integridad: El id_cliente (${dto.id_cliente}) o el id_pago (${dto.id_pago}) no existen en el sistema.`);
            }
            throw error;
        }
    }
    async listarYFiltrar(idTienda, fechaInicio, fechaFin) {
        const filtro = { id_tienda: idTienda };
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
                usuarios: { select: { nombre: true } },
            },
            orderBy: { fecha: 'desc' },
        });
    }
    async obtenerEstadisticas(idTienda, fechaInicio, fechaFin) {
        const ventas = await this.listarYFiltrar(idTienda, fechaInicio, fechaFin);
        const totalVendido = ventas.reduce((sum, fact) => sum + Number(fact.total), 0);
        const cantidadFacturas = ventas.length;
        return {
            periodo: { desde: fechaInicio, hasta: fechaFin },
            total_ingresos: totalVendido,
            total_ventas_realizadas: cantidadFacturas,
        };
    }
    async generarPdfFactura(idFactura, idTienda) {
        const factura = await this.prisma.factura.findFirst({
            where: { id_factura: idFactura, id_tienda: idTienda },
            include: {
                clientes: true,
                tiendas: true,
                detalle_factura: { include: { productos: true } },
            },
        });
        if (!factura)
            throw new common_1.NotFoundException('La factura solicitada no existe.');
        return new Promise((resolve) => {
            const doc = new pdfkit_1.default({ margin: 50 });
            const chunks = [];
            doc.on('data', (chunk) => chunks.push(chunk));
            doc.on('end', () => resolve(Buffer.concat(chunks)));
            doc
                .fontSize(20)
                .text(factura.tiendas.nombre_tienda.toUpperCase(), { align: 'center' });
            doc.fontSize(10).text(`NIT: ${factura.tiendas.nit}`, { align: 'center' });
            doc.moveDown();
            doc.fontSize(14).text(`FACTURA ELECTRÓNICA: ${factura.numero_factura}`, {
                underline: true,
            });
            doc.fontSize(10).text(`Fecha: ${factura.fecha.toLocaleDateString()}`);
            doc.text(`Cliente: ${factura.clientes.nombre_cliente} (${factura.clientes.documento_cliente})`);
            doc.moveDown();
            doc.text('---------------------------------------------------------------------------------', { align: 'center' });
            doc.text('Producto                          Cant.        Precio Un.       Subtotal');
            doc.text('---------------------------------------------------------------------------------', { align: 'center' });
            factura.detalle_factura.forEach((det) => {
                doc.text(`${det.productos.nombre_producto.substring(0, 25).padEnd(28)} ${det.cantidad.toString().padEnd(12)} $${det.precio_unitario.toString().padEnd(14)} $${det.subtotal}`);
            });
            doc.moveDown();
            doc
                .font('Helvetica-Bold')
                .fontSize(12)
                .text(`TOTAL A PAGAR: $${factura.total}`, { align: 'right' });
            doc.end();
        });
    }
};
exports.FacturasService = FacturasService;
exports.FacturasService = FacturasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FacturasService);
//# sourceMappingURL=facturas.service.js.map