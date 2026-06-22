import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    crear(createCategoriaDto: CreateCategoriaDto, req: any): Promise<{
        nombre_categoria: string;
        id_categoria: number;
        id_tienda: number;
    }>;
    buscarTodas(req: any): Promise<{
        nombre_categoria: string;
        id_categoria: number;
        id_tienda: number;
    }[]>;
    eliminar(id: string, req: any): Promise<{
        nombre_categoria: string;
        id_categoria: number;
        id_tienda: number;
    }>;
}
