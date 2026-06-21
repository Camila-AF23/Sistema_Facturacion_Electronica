import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { CreateCajeroDto } from './dto/create-cajero.dto';
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
            nombre_tienda: string;
        };
        token: string;
    }>;
    crearCajero(dto: CreateCajeroDto, idTienda: number): Promise<{
        id_usuario: number;
        documento: string;
        nombre: string;
        fecha_registro: Date;
        contrasena: string;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }>;
    listarCajerosPorTienda(idTienda: number): Promise<{
        id_usuario: number;
        documento: string;
        nombre: string;
        estado: boolean;
    }[]>;
    editarCajero(id: number, data: {
        nombre?: string;
        estado?: boolean;
        contrasena?: string;
    }): Promise<{
        id_usuario: number;
        documento: string;
        nombre: string;
        fecha_registro: Date;
        contrasena: string;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }>;
    eliminarCajero(id: number): Promise<{
        id_usuario: number;
        documento: string;
        nombre: string;
        fecha_registro: Date;
        contrasena: string;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }>;
}
