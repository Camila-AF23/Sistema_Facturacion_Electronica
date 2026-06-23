import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    crear(createCategoriaDto: CreateCategoriaDto, req: any): Promise<{
        id_categoria: number;
        nombre_categoria: string;
        id_tienda: number;
    }>;
    buscarTodas(req: any): Promise<{
        id_categoria: number;
        nombre_categoria: string;
        id_tienda: number;
    }[]>;
    eliminar(id: string, req: any): Promise<{
        id_categoria: number;
        nombre_categoria: string;
        id_tienda: number;
    }>;
}
