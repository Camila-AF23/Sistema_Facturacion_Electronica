import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    crear(createClienteDto: CreateClienteDto, req: any): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }>;
    buscarTodos(req: any): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }[]>;
    actualizar(id: string, updateClienteDto: Partial<CreateClienteDto>, req: any): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }>;
    eliminar(id: string, req: any): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }>;
}
