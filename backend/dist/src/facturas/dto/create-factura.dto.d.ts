declare class DetalleProductoDto {
    id_producto: number;
    cantidad: number;
    precio_unitario: number;
}
export declare class CreateFacturaDto {
    numero_factura: string;
    id_cliente: number;
    id_pago: number;
    total: number;
    productos: DetalleProductoDto[];
}
export {};
