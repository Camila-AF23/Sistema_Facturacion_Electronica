import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('categorias')
@UseGuards(JwtAuthGuard) // Todos los endpoints de este módulo requieren estar logueados
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  crear(@Body() createCategoriaDto: CreateCategoriaDto, @Req() req: any) {
    // Nota: Solo admin (rol 1) crea
    if (req.user.id_rol !== 1) {
      throw new ForbiddenException(
        'Acceso denegado. Solo administradores pueden crear categorías.',
      );
    }
    return this.categoriasService.crear(createCategoriaDto, req.user.id_tienda);
  }

  @Get()
  buscarTodas(@Req() req: any) {
    // Nota: Admin y Cajero pueden buscar
    return this.categoriasService.buscarTodasPorTienda(req.user.id_tienda);
  }

  @Delete('/:id')
  eliminar(@Param('id') id: string, @Req() req: any) {
    // Nota: Solo admin (rol 1) elimina
    if (req.user.id_rol !== 1) {
      throw new ForbiddenException(
        'Acceso denegado. Solo administradores pueden eliminar categorías.',
      );
    }
    return this.categoriasService.eliminar(Number(id), req.user.id_tienda);
  }
}
