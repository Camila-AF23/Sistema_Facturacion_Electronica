import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
export declare class RegistroController {
    private readonly registroService;
    constructor(registroService: RegistroService);
    crearSistemaCompleto(createRegistroDto: CreateRegistroDto): Promise<{
        ok: boolean;
        mensaje: string;
        tienda: string;
        administrador: string;
    }>;
}
