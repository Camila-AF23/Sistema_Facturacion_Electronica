import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    crear(createCategoriaDto: CreateCategoriaDto, req: any): Promise<{
        id_tienda: number;
        nombre_categoria: string;
        id_categoria: number;
    }>;
    buscarTodas(req: any): Promise<{
        id_tienda: number;
        nombre_categoria: string;
        id_categoria: number;
    }[]>;
    eliminar(id: string, req: any): Promise<{
        id_tienda: number;
        nombre_categoria: string;
        id_categoria: number;
    }>;
}
