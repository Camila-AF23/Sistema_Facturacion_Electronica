import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('clientes')
@UseGuards(JwtAuthGuard) // Requiere Login para extraer el id_tienda de forma automática
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  crear(@Body() createClienteDto: CreateClienteDto, @Req() req: any) {
    // Tanto Admin (1) como Cajero (2) pueden registrar clientes nuevos
    return this.clientesService.crear(createClienteDto, req.user.id_tienda);
  }

  @Get()
  buscarTodos(@Req() req: any) {
    // Ambos roles pueden listar para seleccionarlos en el select de la factura
    return this.clientesService.buscarTodosPorTienda(req.user.id_tienda);
  }

  @Patch('/:id')
  actualizar(
    @Param('id') id: string,
    @Body() updateClienteDto: Partial<CreateClienteDto>,
    @Req() req: any,
  ) {
    // Ambos roles pueden corregir o editar datos del cliente
    return this.clientesService.actualizar(
      Number(id),
      updateClienteDto,
      req.user.id_tienda,
    );
  }

  @Delete('/:id')
  eliminar(@Param('id') id: string, @Req() req: any) {
    if (req.user.id_rol !== 1) {
      throw new ForbiddenException(
        'Acceso denegado. Solo los administradores pueden eliminar clientes.',
      );
    }
    return this.clientesService.eliminar(Number(id), req.user.id_tienda);
  }
}
