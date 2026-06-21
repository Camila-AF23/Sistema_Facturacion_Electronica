import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { documento, contrasena } = loginDto;

    // 1. Buscar al usuario en la base de datos e incluir los datos de su rol
    const usuario = await this.prisma.usuarios.findUnique({
      where: { documento },
      include: { roles: true },
    });

    // 2. Si no existe o está inactivo, rechazamos de inmediato
    if (!usuario || !usuario.estado) {
      throw new UnauthorizedException(
        'El documento ingresado no existe o el usuario está inactivo.',
      );
    }

    // 3. Comparar la contraseña ingresada con el hash guardado en la base de datos
    const contrasenaValida = await bcrypt.compare(
      contrasena,
      usuario.contrasena,
    );
    if (!contrasenaValida) {
      throw new UnauthorizedException('La contraseña ingresada es incorrecta.');
    }

    // 4. Crear el Payload (los datos internos que viajarán encriptados en el Token)
    const payload = {
      sub: usuario.id_usuario,
      nombre: usuario.nombre,
      id_rol: usuario.id_rol,
      rol: usuario.roles.nombre_rol,
      id_tienda: usuario.id_tienda, // <-- Clave para saber qué inventario mostrarle en React
    };

    // 5. Retornar los datos del perfil y el token generado para el Frontend
    return {
      ok: true,
      mensaje: '¡Inicio de sesión exitoso!',
      user: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        rol: usuario.roles.nombre_rol,
        id_tienda: usuario.id_tienda,
      },
      token: this.jwtService.sign(payload),
    };
  }
}
