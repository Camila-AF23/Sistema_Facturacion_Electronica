import { PrismaService } from '../database/prisma.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
export declare class RegistroService {
    private prisma;
    constructor(prisma: PrismaService);
    registrarTiendaYDueno(createRegistroDto: CreateRegistroDto): Promise<{
        ok: boolean;
        mensaje: string;
        tienda: string;
        administrador: string;
    }>;
}
