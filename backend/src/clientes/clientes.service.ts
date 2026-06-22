import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  // 1. Crear Cliente vinculado a la tienda del usuario logueado
  async crear(dto: CreateClienteDto, idTienda: number) {
    const clienteExiste = await this.prisma.clientes.findUnique({
      where: { documento_cliente: dto.documento_cliente },
    });
    if (clienteExiste)
      throw new BadRequestException(
        'El documento de este cliente ya está registrado.',
      );

    return await this.prisma.clientes.create({
      data: {
        nombre_cliente: dto.nombre_cliente,
        documento_cliente: dto.documento_cliente,
        correo_cliente: dto.correo_cliente,
        telefono_cliente: dto.telefono_cliente || null,
        tiendas: { connect: { id_tienda: idTienda } },
      },
    });
  }

  // 2. Buscar todos los clientes de la tienda (Para las búsquedas del cajero al facturar)
  async buscarTodosPorTienda(idTienda: number) {
    return await this.prisma.clientes.findMany({
      where: { id_tienda: idTienda },
    });
  }

  // 3. Editar Cliente (Cajero y Admin autorizados)
  async actualizar(
    id: number,
    dto: Partial<CreateClienteDto>,
    idTienda: number,
  ) {
    try {
      return await this.prisma.clientes.update({
        where: { id_cliente: id, id_tienda: idTienda },
        data: dto,
      });
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new BadRequestException('Cliente no encontrado.');
      throw error;
    }
  }

  // 4. Eliminar Cliente (REGLA: Solo el Admin)
  async eliminar(id: number, idTienda: number) {
    try {
      return await this.prisma.clientes.delete({
        where: { id_cliente: id, id_tienda: idTienda },
      });
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new BadRequestException('Cliente no encontrado para eliminar.');
      throw error;
    }
  }
}
