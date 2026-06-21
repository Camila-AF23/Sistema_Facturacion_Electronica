export class CreateRegistroDto {
  // Datos de la Tienda (Obligatorios)
  nombre_tienda!: string;
  nit!: string;
  correo_tienda!: string;

  // Datos de la Tienda (Opcionales)
  direccion_tienda?: string;
  telefono_tienda?: string;

  // Datos del Dueño (Obligatorios)
  nombre_dueno!: string;
  documento_dueno!: string;
  contrasena_dueno!: string;
  confirmar_contrasena!: string;
}
