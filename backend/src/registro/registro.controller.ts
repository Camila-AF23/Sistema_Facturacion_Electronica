import { Controller, Post, Body } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/create-registro.dto';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  crearSistemaCompleto(@Body() createRegistroDto: CreateRegistroDto) {
    return this.registroService.registrarTiendaYDueno(createRegistroDto);
  }
}
