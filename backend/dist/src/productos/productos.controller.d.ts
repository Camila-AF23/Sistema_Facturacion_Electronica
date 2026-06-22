import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    crear(createProductoDto: CreateProductoDto, req: any): Promise<{
        estado: boolean;
        id_tienda: number;
        id_categoria: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        id_producto: number;
    }>;
    buscarTodos(req: any): Promise<({
        categorias: {
            id_tienda: number;
            nombre_categoria: string;
            id_categoria: number;
        };
    } & {
        estado: boolean;
        id_tienda: number;
        id_categoria: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        id_producto: number;
    })[]>;
    actualizar(id: string, updateDto: Partial<CreateProductoDto>, req: any): Promise<{
        estado: boolean;
        id_tienda: number;
        id_categoria: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        id_producto: number;
    }>;
    eliminar(id: string, req: any): Promise<{
        estado: boolean;
        id_tienda: number;
        id_categoria: number;
        codigo_barras: string | null;
        nombre_producto: string;
        precio_compra: import("@prisma/client/runtime/library").Decimal;
        precio_venta: import("@prisma/client/runtime/library").Decimal;
        stock: import("@prisma/client/runtime/library").Decimal;
        id_producto: number;
    }>;
}
