import { PrismaService } from '../database/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(createCategoriaDto: CreateCategoriaDto, idTienda: number): Promise<{
        id_tienda: number;
        nombre_categoria: string;
        id_categoria: number;
    }>;
    buscarTodasPorTienda(idTienda: number): Promise<{
        id_tienda: number;
        nombre_categoria: string;
        id_categoria: number;
    }[]>;
    eliminar(id: number, idTienda: number): Promise<{
        id_tienda: number;
        nombre_categoria: string;
        id_categoria: number;
    }>;
}
