import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { CreateCajeroDto } from './dto/create-cajero.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  // El método de login recibe el documento y la contraseña, valida las credenciales y retorna un token JWT con los datos del usuario
  async login(loginDto: LoginDto) {
    const { documento, contrasena } = loginDto;

    // 1. Buscar al usuario en la base de datos e incluir los datos de su rol
    const usuario = await this.prisma.usuarios.findUnique({
      where: { documento },
      include: { roles: true, tiendas: true },
    });

    // 2. Si no existe o está inactivo, rechazamos de inmediato
    if (!usuario || !usuario.estado) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // 3. Comparar la contraseña ingresada con el hash guardado en la base de datos
    const contrasenaValida = await bcrypt.compare(
      contrasena,
      usuario.contrasena,
    );
    if (!contrasenaValida) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // 4. Crear el Payload (los datos internos que viajaran encriptados en el Token)
    const payload = {
      sub: usuario.id_usuario,
      nombre: usuario.nombre,
      id_rol: usuario.id_rol,
      rol: usuario.roles.nombre_rol,
      id_tienda: usuario.id_tienda, // Esto es clave para saber que inventario mostrarle en React
    };

    // 5. Retornar los datos del perfil y el token generado para el Frontend
    return {
      ok: true,
      mensaje: '¡Inicio exitoso!',
      user: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        rol: usuario.roles.nombre_rol,
        id_tienda: usuario.id_tienda,
        nombre_tienda: usuario.tiendas.nombre_tienda,
      },
      token: this.jwtService.sign(payload),
    };
  }

  // Metodo de creación de cajeros, solo accesible para Admins (RolesGuard se encarga de validar esto)

  // Crear Cajero vinculando automáticamente la tienda del Admin logueado
  async crearCajero(dto: CreateCajeroDto, idTienda: number) {
    const usuarioExiste = await this.prisma.usuarios.findUnique({
      where: { documento: dto.documento },
    });
    if (usuarioExiste)
      throw new BadRequestException('El documento ya está registrado.');

    const sal = await bcrypt.genSalt(10);
    const contrasenaHasheada = await bcrypt.hash(dto.contrasena, sal);

    return await this.prisma.usuarios.create({
      data: {
        nombre: dto.nombre,
        documento: dto.documento,
        contrasena: contrasenaHasheada,
        fecha_registro: new Date(),
        estado: true,
        roles: {
          connect: { id_rol: 2 }, // Rol de cajero por defecto
        },
        tiendas: {
          connect: { id_tienda: idTienda }, // Tienda extraída del token
        },
      },
    });
  }

  // Listar cajeros pertenecientes a la tienda del Admin
  async listarCajerosPorTienda(idTienda: number) {
    return await this.prisma.usuarios.findMany({
      where: {
        id_tienda: idTienda,
        id_rol: 2,
      },
      select: {
        id_usuario: true,
        nombre: true,
        documento: true,
        estado: true,
      },
    });
  }

  // Editar datos básicos o estado del Cajero
  async editarCajero(
    id: number,
    data: { nombre?: string; estado?: boolean; contrasena?: string },
  ) {
    try {
      // Interceptamos si el administrador envió una nueva contraseña para actualizar
      if (data.contrasena) {
        const sal = await bcrypt.genSalt(10);
        data.contrasena = await bcrypt.hash(data.contrasena, sal);
      }

      return await this.prisma.usuarios.update({
        where: { id_usuario: id },
        data,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new BadRequestException(
          `No se encontró ningún usuario con el ID ${id}.`,
        );
      }
      throw error;
    }
  }

  // Eliminar lógicamente al Cajero
  async eliminarCajero(id: number) {
    try {
      return await this.prisma.usuarios.update({
        where: { id_usuario: id },
        data: { estado: false },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new BadRequestException(
          `No se encontró ningún usuario con el ID ${id} para eliminar.`,
        );
      }
      throw error;
    }
  }
}
