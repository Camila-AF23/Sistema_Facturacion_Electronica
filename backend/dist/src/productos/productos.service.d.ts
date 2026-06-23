import { PrismaService } from '../database/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductosService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(dto: CreateProductoDto, idTienda: number): Promise<{
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
    buscarTodosPorTienda(idTienda: number): Promise<({
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
    actualizar(id: number, dto: Partial<CreateProductoDto>, idTienda: number): Promise<{
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
    eliminar(id: number, idTienda: number): Promise<{
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
