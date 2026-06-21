import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly categorias: "categorias";
    readonly clientes: "clientes";
    readonly detalle_factura: "detalle_factura";
    readonly factura: "factura";
    readonly metodo_pago: "metodo_pago";
    readonly productos: "productos";
    readonly roles: "roles";
    readonly tiendas: "tiendas";
    readonly usuarios: "usuarios";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoriasScalarFieldEnum: {
    readonly id_categoria: "id_categoria";
    readonly nombre_categoria: "nombre_categoria";
    readonly id_tienda: "id_tienda";
};
export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum];
export declare const ClientesScalarFieldEnum: {
    readonly id_cliente: "id_cliente";
    readonly documento_cliente: "documento_cliente";
    readonly nombre_cliente: "nombre_cliente";
    readonly telefono_cliente: "telefono_cliente";
    readonly correo_cliente: "correo_cliente";
    readonly id_tienda: "id_tienda";
};
export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum];
export declare const Detalle_facturaScalarFieldEnum: {
    readonly id_detalle: "id_detalle";
    readonly cantidad: "cantidad";
    readonly precio_unitario: "precio_unitario";
    readonly subtotal: "subtotal";
    readonly id_factura: "id_factura";
    readonly id_producto: "id_producto";
};
export type Detalle_facturaScalarFieldEnum = (typeof Detalle_facturaScalarFieldEnum)[keyof typeof Detalle_facturaScalarFieldEnum];
export declare const FacturaScalarFieldEnum: {
    readonly id_factura: "id_factura";
    readonly numero_factura: "numero_factura";
    readonly fecha: "fecha";
    readonly total: "total";
    readonly id_usuario: "id_usuario";
    readonly id_cliente: "id_cliente";
    readonly id_tienda: "id_tienda";
    readonly id_pago: "id_pago";
};
export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum];
export declare const Metodo_pagoScalarFieldEnum: {
    readonly id_pago: "id_pago";
    readonly tipo_pago: "tipo_pago";
};
export type Metodo_pagoScalarFieldEnum = (typeof Metodo_pagoScalarFieldEnum)[keyof typeof Metodo_pagoScalarFieldEnum];
export declare const ProductosScalarFieldEnum: {
    readonly id_producto: "id_producto";
    readonly codigo_barras: "codigo_barras";
    readonly nombre_producto: "nombre_producto";
    readonly precio_compra: "precio_compra";
    readonly precio_venta: "precio_venta";
    readonly stock: "stock";
    readonly estado: "estado";
    readonly id_categoria: "id_categoria";
    readonly id_tienda: "id_tienda";
};
export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id_rol: "id_rol";
    readonly nombre_rol: "nombre_rol";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const TiendasScalarFieldEnum: {
    readonly id_tienda: "id_tienda";
    readonly nombre_tienda: "nombre_tienda";
    readonly direccion_tienda: "direccion_tienda";
    readonly telefono_tienda: "telefono_tienda";
    readonly correo: "correo";
    readonly nit: "nit";
};
export type TiendasScalarFieldEnum = (typeof TiendasScalarFieldEnum)[keyof typeof TiendasScalarFieldEnum];
export declare const UsuariosScalarFieldEnum: {
    readonly id_usuario: "id_usuario";
    readonly nombre: "nombre";
    readonly documento: "documento";
    readonly fecha_registro: "fecha_registro";
    readonly contrasena: "contrasena";
    readonly estado: "estado";
    readonly id_rol: "id_rol";
    readonly id_tienda: "id_tienda";
};
export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const categoriasOrderByRelevanceFieldEnum: {
    readonly nombre_categoria: "nombre_categoria";
};
export type categoriasOrderByRelevanceFieldEnum = (typeof categoriasOrderByRelevanceFieldEnum)[keyof typeof categoriasOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const clientesOrderByRelevanceFieldEnum: {
    readonly documento_cliente: "documento_cliente";
    readonly nombre_cliente: "nombre_cliente";
    readonly telefono_cliente: "telefono_cliente";
    readonly correo_cliente: "correo_cliente";
};
export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum];
export declare const facturaOrderByRelevanceFieldEnum: {
    readonly numero_factura: "numero_factura";
};
export type facturaOrderByRelevanceFieldEnum = (typeof facturaOrderByRelevanceFieldEnum)[keyof typeof facturaOrderByRelevanceFieldEnum];
export declare const metodo_pagoOrderByRelevanceFieldEnum: {
    readonly tipo_pago: "tipo_pago";
};
export type metodo_pagoOrderByRelevanceFieldEnum = (typeof metodo_pagoOrderByRelevanceFieldEnum)[keyof typeof metodo_pagoOrderByRelevanceFieldEnum];
export declare const productosOrderByRelevanceFieldEnum: {
    readonly codigo_barras: "codigo_barras";
    readonly nombre_producto: "nombre_producto";
};
export type productosOrderByRelevanceFieldEnum = (typeof productosOrderByRelevanceFieldEnum)[keyof typeof productosOrderByRelevanceFieldEnum];
export declare const rolesOrderByRelevanceFieldEnum: {
    readonly nombre_rol: "nombre_rol";
};
export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum];
export declare const tiendasOrderByRelevanceFieldEnum: {
    readonly nombre_tienda: "nombre_tienda";
    readonly direccion_tienda: "direccion_tienda";
    readonly telefono_tienda: "telefono_tienda";
    readonly correo: "correo";
    readonly nit: "nit";
};
export type tiendasOrderByRelevanceFieldEnum = (typeof tiendasOrderByRelevanceFieldEnum)[keyof typeof tiendasOrderByRelevanceFieldEnum];
export declare const usuariosOrderByRelevanceFieldEnum: {
    readonly nombre: "nombre";
    readonly documento: "documento";
    readonly contrasena: "contrasena";
};
export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum];
