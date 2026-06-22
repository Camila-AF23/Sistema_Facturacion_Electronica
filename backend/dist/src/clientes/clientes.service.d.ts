import { PrismaService } from '../database/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(dto: CreateClienteDto, idTienda: number): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }>;
    buscarTodosPorTienda(idTienda: number): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }[]>;
    actualizar(id: number, dto: Partial<CreateClienteDto>, idTienda: number): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }>;
    eliminar(id: number, idTienda: number): Promise<{
        documento_cliente: string;
        nombre_cliente: string;
        telefono_cliente: string | null;
        correo_cliente: string;
        id_cliente: number;
        id_tienda: number;
    }>;
}
