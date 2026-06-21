import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        ok: boolean;
        mensaje: string;
        user: {
            id: number;
            nombre: string;
            rol: string;
            id_tienda: number;
        };
        token: string;
    }>;
}
