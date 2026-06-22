import { PrismaService } from '../database/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(dto: CreateClienteDto, idTienda: number): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }>;
    buscarTodosPorTienda(idTienda: number): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }[]>;
    actualizar(id: number, dto: Partial<CreateClienteDto>, idTienda: number): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }>;
    eliminar(id: number, idTienda: number): Promise<{
        id_tienda: number;
        id_cliente: number;
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
    }>;
}
