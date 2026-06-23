"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../database/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const { documento, contrasena } = loginDto;
        const usuario = await this.prisma.usuarios.findUnique({
            where: { documento },
            include: { roles: true, tiendas: true },
        });
        if (!usuario || !usuario.estado) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!contrasenaValida) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        const payload = {
            sub: usuario.id_usuario,
            nombre: usuario.nombre,
            id_rol: usuario.id_rol,
            rol: usuario.roles.nombre_rol,
            id_tienda: usuario.id_tienda,
        };
        return {
            ok: true,
            mensaje: '¡Inicio exitoso!',
            user: {
                id: usuario.id_usuario,
                nombre: usuario.nombre,
                rol: usuario.roles.nombre_rol,
                id_tienda: usuario.id_tienda,
                nombre_tienda: usuario.tiendas.nombre_tienda,
            },
            token: this.jwtService.sign(payload),
        };
    }
    async crearCajero(dto, idTienda) {
        const usuarioExiste = await this.prisma.usuarios.findUnique({
            where: { documento: dto.documento },
        });
        if (usuarioExiste)
            throw new common_1.BadRequestException('El documento ya está registrado.');
        const sal = await bcrypt.genSalt(10);
        const contrasenaHasheada = await bcrypt.hash(dto.contrasena, sal);
        return await this.prisma.usuarios.create({
            data: {
                nombre: dto.nombre,
                documento: dto.documento,
                contrasena: contrasenaHasheada,
                fecha_registro: new Date(),
                estado: true,
                roles: {
                    connect: { id_rol: 2 },
                },
                tiendas: {
                    connect: { id_tienda: idTienda },
                },
            },
        });
    }
    async listarCajerosPorTienda(idTienda) {
        return await this.prisma.usuarios.findMany({
            where: {
                id_tienda: idTienda,
                id_rol: 2,
                estado: true,
            },
            select: {
                id_usuario: true,
                nombre: true,
                documento: true,
                estado: true,
            },
        });
    }
    async editarCajero(id, data) {
        try {
            if (data.contrasena) {
                const sal = await bcrypt.genSalt(10);
                data.contrasena = await bcrypt.hash(data.contrasena, sal);
            }
            return await this.prisma.usuarios.update({
                where: { id_usuario: id },
                data,
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.BadRequestException(`No se encontró ningún usuario con el ID ${id}.`);
            }
            throw error;
        }
    }
    async eliminarCajero(id) {
        try {
            return await this.prisma.usuarios.update({
                where: { id_usuario: id },
                data: { estado: false },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.BadRequestException(`No se encontró ningún usuario con el ID ${id} para eliminar.`);
            }
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map