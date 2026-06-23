import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateCajeroDto } from './dto/create-cajero.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    iniciarSesion(loginDto: LoginDto): Promise<{
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
    crearCajero(createCajeroDto: CreateCajeroDto, req: any): Promise<{
        id_tienda: number;
        id_usuario: number;
        estado: boolean;
        id_rol: number;
        nombre: string;
        documento: string;
        fecha_registro: Date;
        contrasena: string;
    }>;
    listarCajeros(req: any): Promise<{
        id_usuario: number;
        estado: boolean;
        nombre: string;
        documento: string;
    }[]>;
    editarCajero(id: string, body: {
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
    eliminarCajero(id: string): Promise<{
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
