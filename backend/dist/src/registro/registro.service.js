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
exports.RegistroService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let RegistroService = class RegistroService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registrarTiendaYDueno(createRegistroDto) {
        const { nombre_tienda, nit, correo_tienda, direccion_tienda, telefono_tienda, nombre_dueno, documento_dueno, contrasena_dueno, confirmar_contrasena, } = createRegistroDto;
        if (contrasena_dueno !== confirmar_contrasena) {
            throw new common_1.BadRequestException('Las contraseñas no coinciden.');
        }
        const tiendaExiste = await this.prisma.tiendas.findUnique({
            where: { nit },
        });
        if (tiendaExiste)
            throw new common_1.BadRequestException('El NIT de la tienda ya está registrado.');
        const usuarioExiste = await this.prisma.usuarios.findUnique({
            where: { documento: documento_dueno },
        });
        if (usuarioExiste)
            throw new common_1.BadRequestException('El documento del dueño ya está registrado.');
        const sal = await bcrypt.genSalt(10);
        const contrasenaHasheada = await bcrypt.hash(contrasena_dueno, sal);
        return await this.prisma.$transaction(async (tx) => {
            const nuevaTienda = await tx.tiendas.create({
                data: {
                    nombre_tienda,
                    nit,
                    correo: correo_tienda,
                    direccion_tienda: direccion_tienda || null,
                    telefono_tienda: telefono_tienda || null,
                },
            });
            const nuevoUsuario = await tx.usuarios.create({
                data: {
                    nombre: nombre_dueno,
                    documento: documento_dueno,
                    contrasena: contrasenaHasheada,
                    fecha_registro: new Date(),
                    estado: true,
                    id_rol: 1,
                    id_tienda: nuevaTienda.id_tienda,
                },
            });
            return {
                ok: true,
                mensaje: '¡Tienda y Administrador creados con éxito!',
                tienda: nuevaTienda.nombre_tienda,
                administrador: nuevoUsuario.nombre,
            };
        });
    }
};
exports.RegistroService = RegistroService;
exports.RegistroService = RegistroService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegistroService);
//# sourceMappingURL=registro.service.js.map