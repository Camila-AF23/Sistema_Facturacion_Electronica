import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateCajeroDto } from './dto/create-cajero.dto';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  iniciarSesion(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // ESTAS SON LAS RUTAS DE GESTIÓN DE CAJEROS (PROTEGIDAS EXCLUSIVAMENTE PARA EL ADMIN)

  @UseGuards(RolesGuard)
  @Post('cajeros')
  crearCajero(@Body() createCajeroDto: CreateCajeroDto, @Req() req: any) {
    // Extraemos el id_tienda que guardó el RolesGuard dentro del token del administrador
    const idTiendaAdmin = req.user.id_tienda;
    return this.authService.crearCajero(createCajeroDto, idTiendaAdmin);
  }

  @UseGuards(RolesGuard)
  @Get('cajeros')
  listarCajeros(@Req() req: any) {
    // También extraemos el id_tienda de forma automática para listar solo los cajeros de este administrador
    const idTiendaAdmin = req.user.id_tienda;
    return this.authService.listarCajerosPorTienda(idTiendaAdmin);
  }

  @UseGuards(RolesGuard)
  @Put('cajeros/:id')
  editarCajero(
    @Param('id') id: string,
    @Body() body: { nombre?: string; estado?: boolean; contrasena?: string },
  ) {
    return this.authService.editarCajero(Number(id), body);
  }

  @UseGuards(RolesGuard)
  @Delete('cajeros/:id')
  eliminarCajero(@Param('id') id: string) {
    return this.authService.eliminarCajero(Number(id));
  }
}
