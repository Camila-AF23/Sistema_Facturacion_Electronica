import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Token de autenticación no proporcionado.',
      );
    }

    const token = authHeader.split(' ')[1];

    try {
      // Desencriptamos el token JWT para leer el payload
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET, // Asegúrate de que esta variable de entorno esté configurada
      });

      request.user = payload; // Guardamos el usuario en la petición para usarlo luego

      // Regla estricta del cuaderno: El id_rol debe ser 1 (Administrador) para poder pasar
      if (payload.id_rol !== 1) {
        throw new ForbiddenException(
          'Acceso denegado. Solo los administradores pueden gestionar cajeros.',
        );
      }

      return true;
    } catch (error) {
      if (error instanceof ForbiddenException) throw error;
      throw new UnauthorizedException('Token inválido o expirado.');
    }
  }
}
