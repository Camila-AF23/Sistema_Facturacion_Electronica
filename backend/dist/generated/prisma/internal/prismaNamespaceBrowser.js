"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosOrderByRelevanceFieldEnum = exports.tiendasOrderByRelevanceFieldEnum = exports.rolesOrderByRelevanceFieldEnum = exports.productosOrderByRelevanceFieldEnum = exports.metodo_pagoOrderByRelevanceFieldEnum = exports.facturaOrderByRelevanceFieldEnum = exports.clientesOrderByRelevanceFieldEnum = exports.NullsOrder = exports.categoriasOrderByRelevanceFieldEnum = exports.SortOrder = exports.UsuariosScalarFieldEnum = exports.TiendasScalarFieldEnum = exports.RolesScalarFieldEnum = exports.ProductosScalarFieldEnum = exports.Metodo_pagoScalarFieldEnum = exports.FacturaScalarFieldEnum = exports.Detalle_facturaScalarFieldEnum = exports.ClientesScalarFieldEnum = exports.CategoriasScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    categorias: 'categorias',
    clientes: 'clientes',
    detalle_factura: 'detalle_factura',
    factura: 'factura',
    metodo_pago: 'metodo_pago',
    productos: 'productos',
    roles: 'roles',
    tiendas: 'tiendas',
    usuarios: 'usuarios'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.CategoriasScalarFieldEnum = {
    id_categoria: 'id_categoria',
    nombre_categoria: 'nombre_categoria',
    id_tienda: 'id_tienda'
};
exports.ClientesScalarFieldEnum = {
    id_cliente: 'id_cliente',
    documento_cliente: 'documento_cliente',
    nombre_cliente: 'nombre_cliente',
    telefono_cliente: 'telefono_cliente',
    correo_cliente: 'correo_cliente',
    id_tienda: 'id_tienda'
};
exports.Detalle_facturaScalarFieldEnum = {
    id_detalle: 'id_detalle',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario',
    subtotal: 'subtotal',
    id_factura: 'id_factura',
    id_producto: 'id_producto'
};
exports.FacturaScalarFieldEnum = {
    id_factura: 'id_factura',
    numero_factura: 'numero_factura',
    fecha: 'fecha',
    total: 'total',
    id_usuario: 'id_usuario',
    id_cliente: 'id_cliente',
    id_tienda: 'id_tienda',
    id_pago: 'id_pago'
};
exports.Metodo_pagoScalarFieldEnum = {
    id_pago: 'id_pago',
    tipo_pago: 'tipo_pago'
};
exports.ProductosScalarFieldEnum = {
    id_producto: 'id_producto',
    codigo_barras: 'codigo_barras',
    nombre_producto: 'nombre_producto',
    precio_compra: 'precio_compra',
    precio_venta: 'precio_venta',
    stock: 'stock',
    estado: 'estado',
    id_categoria: 'id_categoria',
    id_tienda: 'id_tienda'
};
exports.RolesScalarFieldEnum = {
    id_rol: 'id_rol',
    nombre_rol: 'nombre_rol'
};
exports.TiendasScalarFieldEnum = {
    id_tienda: 'id_tienda',
    nombre_tienda: 'nombre_tienda',
    direccion_tienda: 'direccion_tienda',
    telefono_tienda: 'telefono_tienda',
    correo: 'correo',
    nit: 'nit'
};
exports.UsuariosScalarFieldEnum = {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    documento: 'documento',
    fecha_registro: 'fecha_registro',
    contrasena: 'contrasena',
    estado: 'estado',
    id_rol: 'id_rol',
    id_tienda: 'id_tienda'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.categoriasOrderByRelevanceFieldEnum = {
    nombre_categoria: 'nombre_categoria'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.clientesOrderByRelevanceFieldEnum = {
    documento_cliente: 'documento_cliente',
    nombre_cliente: 'nombre_cliente',
    telefono_cliente: 'telefono_cliente',
    correo_cliente: 'correo_cliente'
};
exports.facturaOrderByRelevanceFieldEnum = {
    numero_factura: 'numero_factura'
};
exports.metodo_pagoOrderByRelevanceFieldEnum = {
    tipo_pago: 'tipo_pago'
};
exports.productosOrderByRelevanceFieldEnum = {
    codigo_barras: 'codigo_barras',
    nombre_producto: 'nombre_producto'
};
exports.rolesOrderByRelevanceFieldEnum = {
    nombre_rol: 'nombre_rol'
};
exports.tiendasOrderByRelevanceFieldEnum = {
    nombre_tienda: 'nombre_tienda',
    direccion_tienda: 'direccion_tienda',
    telefono_tienda: 'telefono_tienda',
    correo: 'correo',
    nit: 'nit'
};
exports.usuariosOrderByRelevanceFieldEnum = {
    nombre: 'nombre',
    documento: 'documento',
    contrasena: 'contrasena'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map