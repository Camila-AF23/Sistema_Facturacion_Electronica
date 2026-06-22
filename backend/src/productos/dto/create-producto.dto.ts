export class CreateProductoDto {
  nombre_producto!: string;
  precio_compra!: number;
  precio_venta!: number;
  stock!: number; // El stock inicial al crear el producto
  id_categoria!: number; // El ID que seleccionaron en el menú desplegable (Select)
  codigo_barras?: string; // Opcional
}
