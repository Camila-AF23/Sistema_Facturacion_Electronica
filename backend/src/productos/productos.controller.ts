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
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('productos')
@UseGuards(JwtAuthGuard) // Protegido para usuarios logueados
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  crear(@Body() createProductoDto: CreateProductoDto, @Req() req: any) {
    if (req.user.id_rol !== 1) {
      throw new ForbiddenException(
        'Solo los administradores pueden registrar productos.',
      );
    }
    return this.productosService.crear(createProductoDto, req.user.id_tienda);
  }

  @Get()
  buscarTodos(@Req() req: any) {
    // Admin y Cajero pueden buscar (Permiso total concedido aquí)
    return this.productosService.buscarTodosPorTienda(req.user.id_tienda);
  }

  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body() updateDto: Partial<CreateProductoDto>,
    @Req() req: any,
  ) {
    if (req.user.id_rol !== 1) {
      throw new ForbiddenException(
        'Solo los administradores pueden editar productos.',
      );
    }
    return this.productosService.actualizar(
      Number(id),
      updateDto,
      req.user.id_tienda,
    );
  }

  @Delete('/:id')
  eliminar(@Param('id') id: string, @Req() req: any) {
    if (req.user.id_rol !== 1) {
      throw new ForbiddenException(
        'Solo los administradores pueden eliminar productos.',
      );
    }
    return this.productosService.eliminar(Number(id), req.user.id_tienda);
  }
}
