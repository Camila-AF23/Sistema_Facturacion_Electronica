"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let ClientesService = class ClientesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(dto, idTienda) {
        const clienteExiste = await this.prisma.clientes.findUnique({
            where: { documento_cliente: dto.documento_cliente },
        });
        if (clienteExiste)
            throw new common_1.BadRequestException('El documento de este cliente ya está registrado.');
        return await this.prisma.clientes.create({
            data: {
                nombre_cliente: dto.nombre_cliente,
                documento_cliente: dto.documento_cliente,
                correo_cliente: dto.correo_cliente,
                telefono_cliente: dto.telefono_cliente || null,
                tiendas: { connect: { id_tienda: idTienda } },
            },
        });
    }
    async buscarTodosPorTienda(idTienda) {
        return await this.prisma.clientes.findMany({
            where: { id_tienda: idTienda },
        });
    }
    async actualizar(id, dto, idTienda) {
        try {
            return await this.prisma.clientes.update({
                where: { id_cliente: id, id_tienda: idTienda },
                data: dto,
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException('Cliente no encontrado.');
            throw error;
        }
    }
    async eliminar(id, idTienda) {
        try {
            return await this.prisma.clientes.delete({
                where: { id_cliente: id, id_tienda: idTienda },
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException('Cliente no encontrado para eliminar.');
            throw error;
        }
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map