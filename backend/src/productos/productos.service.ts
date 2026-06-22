import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  // 1. Crear producto vinculado a la tienda y a su categoría
  async crear(dto: CreateProductoDto, idTienda: number) {
    return await this.prisma.productos.create({
      data: {
        nombre_producto: dto.nombre_producto,
        precio_compra: dto.precio_compra,
        precio_venta: dto.precio_venta,
        stock: dto.stock,
        codigo_barras: dto.codigo_barras || null,
        estado: true,
        categorias: { connect: { id_categoria: Number(dto.id_categoria) } },
        tiendas: { connect: { id_tienda: idTienda } },
      },
    });
  }

  // 2. Buscar todos los productos (Para las tablas del Admin y los Selects del Cajero)
  async buscarTodosPorTienda(idTienda: number) {
    return await this.prisma.productos.findMany({
      where: { id_tienda: idTienda, estado: true }, // Solo productos activos
      include: { categorias: true }, // Te trae el nombre de la categoría de una vez
    });
  }

  // 3. Editar Producto (Precios, nombres, o ajustar stock manualmente)
  async actualizar(
    id: number,
    dto: Partial<CreateProductoDto>,
    idTienda: number,
  ) {
    try {
      return await this.prisma.productos.update({
        where: { id_producto: id, id_tienda: idTienda },
        data: dto,
      });
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new BadRequestException('Producto no encontrado en tu tienda.');
      throw error;
    }
  }

  // 4. Eliminar Producto (Borrado lógico cambiando estado a false para no romper el historial de facturas antiguas)
  async eliminar(id: number, idTienda: number) {
    try {
      return await this.prisma.productos.update({
        where: { id_producto: id, id_tienda: idTienda },
        data: { estado: false },
      });
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new BadRequestException('Producto no encontrado.');
      throw error;
    }
  }
}
