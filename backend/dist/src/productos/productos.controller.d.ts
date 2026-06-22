import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    crear(createProductoDto: CreateProductoDto, req: any): Promise<{
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
        id_producto: number;
        id_categoria: number;
        id_tienda: number;
    }>;
    buscarTodos(req: any): Promise<({
        categorias: {
            id_categoria: number;
            id_tienda: number;
            nombre_categoria: string;
        };
    } & {
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
        id_producto: number;
        id_categoria: number;
        id_tienda: number;
    })[]>;
    actualizar(id: string, updateDto: Partial<CreateProductoDto>, req: any): Promise<{
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
        id_producto: number;
        id_categoria: number;
        id_tienda: number;
    }>;
    eliminar(id: string, req: any): Promise<{
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
        id_producto: number;
        id_categoria: number;
        id_tienda: number;
    }>;
}
