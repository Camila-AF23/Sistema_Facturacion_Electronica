import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    crear(createProductoDto: CreateProductoDto, req: any): Promise<{
        id_categoria: number;
        id_tienda: number;
        id_producto: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
    }>;
    buscarTodos(req: any): Promise<({
        categorias: {
            id_categoria: number;
            nombre_categoria: string;
            id_tienda: number;
        };
    } & {
        id_categoria: number;
        id_tienda: number;
        id_producto: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
    })[]>;
    actualizar(id: string, updateDto: Partial<CreateProductoDto>, req: any): Promise<{
        id_categoria: number;
        id_tienda: number;
        id_producto: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
    }>;
    eliminar(id: string, req: any): Promise<{
        id_categoria: number;
        id_tienda: number;
        id_producto: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        estado: boolean;
    }>;
}
