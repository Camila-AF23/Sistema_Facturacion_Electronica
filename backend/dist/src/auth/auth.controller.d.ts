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
        documento: string;
        contrasena: string;
        id_usuario: number;
        nombre: string;
        fecha_registro: Date;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }>;
    listarCajeros(req: any): Promise<{
        documento: string;
        id_usuario: number;
        nombre: string;
        estado: boolean;
    }[]>;
    editarCajero(id: string, body: {
        nombre?: string;
        estado?: boolean;
        contrasena?: string;
    }): Promise<{
        documento: string;
        contrasena: string;
        id_usuario: number;
        nombre: string;
        fecha_registro: Date;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }>;
    eliminarCajero(id: string): Promise<{
        documento: string;
        contrasena: string;
        id_usuario: number;
        nombre: string;
        fecha_registro: Date;
        estado: boolean;
        id_rol: number;
        id_tienda: number;
    }>;
}
