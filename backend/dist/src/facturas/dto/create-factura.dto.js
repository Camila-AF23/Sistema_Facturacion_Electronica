"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFacturaDto = void 0;
class DetalleProductoDto {
    id_producto;
    cantidad;
    precio_unitario;
}
class CreateFacturaDto {
    numero_factura;
    id_cliente;
    id_pago;
    total;
    productos;
}
exports.CreateFacturaDto = CreateFacturaDto;
//# sourceMappingURL=create-factura.dto.js.map