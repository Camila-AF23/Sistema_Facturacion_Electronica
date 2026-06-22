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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let CategoriasService = class CategoriasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(createCategoriaDto, idTienda) {
        return await this.prisma.categorias.create({
            data: {
                nombre_categoria: createCategoriaDto.nombre_categoria,
                id_tienda: idTienda,
            },
        });
    }
    async buscarTodasPorTienda(idTienda) {
        return await this.prisma.categorias.findMany({
            where: { id_tienda: idTienda },
        });
    }
    async eliminar(id, idTienda) {
        try {
            return await this.prisma.categorias.delete({
                where: {
                    id_categoria: id,
                    id_tienda: idTienda,
                },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.BadRequestException(`No se encontró la categoría con el ID ${id} en tu tienda.`);
            }
            throw error;
        }
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map