import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  // 1. Crear categoría vinculada a la tienda del usuario logueado
  async crear(createCategoriaDto: CreateCategoriaDto, idTienda: number) {
    return await this.prisma.categorias.create({
      data: {
        nombre_categoria: createCategoriaDto.nombre_categoria,
        id_tienda: idTienda,
      },
    });
  }

  // 2. Buscar todas las categorías (Para en el frontend llenar los selects de Admin y Cajero)
  async buscarTodasPorTienda(idTienda: number) {
    return await this.prisma.categorias.findMany({
      where: { id_tienda: idTienda },
    });
  }

  // 3. Eliminar una categoría controlando si el ID no existe
  async eliminar(id: number, idTienda: number) {
    try {
      return await this.prisma.categorias.delete({
        where: {
          id_categoria: id,
          id_tienda: idTienda, // Seguridad extrema: solo borra si pertenece a su tienda
        },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new BadRequestException(
          `No se encontró la categoría con el ID ${id} en tu tienda.`,
        );
      }
      throw error;
    }
  }
}
