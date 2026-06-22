import { PrismaService } from '../database/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductosService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(dto: CreateProductoDto, idTienda: number): Promise<{
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
    buscarTodosPorTienda(idTienda: number): Promise<({
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
    actualizar(id: number, dto: Partial<CreateProductoDto>, idTienda: number): Promise<{
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
    eliminar(id: number, idTienda: number): Promise<{
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
