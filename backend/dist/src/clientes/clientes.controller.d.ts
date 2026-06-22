import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    crear(createClienteDto: CreateClienteDto, req: any): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }>;
    buscarTodos(req: any): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }[]>;
    actualizar(id: string, updateClienteDto: Partial<CreateClienteDto>, req: any): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }>;
    eliminar(id: string, req: any): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }>;
}
