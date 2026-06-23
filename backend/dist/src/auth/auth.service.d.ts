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
        id_tienda: number;
        id_usuario: number;
        estado: boolean;
        id_rol: number;
        nombre: string;
        documento: string;
        fecha_registro: Date;
        contrasena: string;
    }>;
    listarCajerosPorTienda(idTienda: number): Promise<{
        id_usuario: number;
        estado: boolean;
        nombre: string;
        documento: string;
    }[]>;
    editarCajero(id: number, data: {
        nombre?: string;
        estado?: boolean;
        contrasena?: string;
    }): Promise<{
        id_tienda: number;
        id_usuario: number;
        estado: boolean;
        id_rol: number;
        nombre: string;
        documento: string;
        fecha_registro: Date;
        contrasena: string;
    }>;
    eliminarCajero(id: number): Promise<{
        id_tienda: number;
        id_usuario: number;
        estado: boolean;
        id_rol: number;
        nombre: string;
        documento: string;
        fecha_registro: Date;
        contrasena: string;
    }>;
}
