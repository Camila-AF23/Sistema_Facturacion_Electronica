import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegistroService {
  constructor(private prisma: PrismaService) {}

  async registrarTiendaYDueno(createRegistroDto: CreateRegistroDto) {
    const {
      nombre_tienda,
      nit,
      correo_tienda,
      direccion_tienda,
      telefono_tienda,
      nombre_dueno,
      documento_dueno,
      contrasena_dueno,
      confirmar_contrasena,
    } = createRegistroDto;

    // NOTA 1: Aqui validamos que las contraseñas coincidan antes de procesar
    if (contrasena_dueno !== confirmar_contrasena) {
      throw new BadRequestException('Las contraseñas no coinciden.');
    }

    // Validamos que el NIT o el Documento no existan previamente en la base de datos
    const tiendaExiste = await this.prisma.tiendas.findUnique({
      where: { nit },
    });
    if (tiendaExiste)
      throw new BadRequestException('El NIT de la tienda ya está registrado.');

    const usuarioExiste = await this.prisma.usuarios.findUnique({
      where: { documento: documento_dueno },
    });
    if (usuarioExiste)
      throw new BadRequestException(
        'El documento del dueño ya está registrado.',
      );

    // Encriptamos la contraseña de forma segura
    const sal = await bcrypt.genSalt(10);
    const contrasenaHasheada = await bcrypt.hash(contrasena_dueno, sal);

    // Ejecutar todo dentro de una transacción segura de Prisma 6
    return await this.prisma.$transaction(async (tx) => {
      // Aqui mapeamos los campos que se pediran para el formulario del frontend, pediremos datos de la
      // tienda y del dueño, pero solo se creara UN registro llenando la tabla de tiendas y otro en la tabla de usuarios.
      // Crear la tienda (solicitamos datos de la tienda)
      const nuevaTienda = await tx.tiendas.create({
        data: {
          nombre_tienda,
          nit,
          correo: correo_tienda,
          direccion_tienda: direccion_tienda || null,
          telefono_tienda: telefono_tienda || null,
        },
      });

      // Crear el usuario dueño vinculado a la tienda (solicitamos datos del usuario dueño)
      const nuevoUsuario = await tx.usuarios.create({
        data: {
          nombre: nombre_dueno,
          documento: documento_dueno,
          contrasena: contrasenaHasheada,
          fecha_registro: new Date(),
          estado: true,
          id_rol: 1, // NOTA 2: Forzar estrictamente a Administrador (ID: 1)
          id_tienda: nuevaTienda.id_tienda,
        },
      });

      return {
        ok: true,
        mensaje: '¡Tienda y Administrador creados con éxito!',
        tienda: nuevaTienda.nombre_tienda,
        administrador: nuevoUsuario.nombre,
      };
    });
  }
}
