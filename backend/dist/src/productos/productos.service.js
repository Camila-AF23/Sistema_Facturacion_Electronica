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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let ProductosService = class ProductosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(dto, idTienda) {
        return await this.prisma.productos.create({
            data: {
                nombre_producto: dto.nombre_producto,
                precio_compra: dto.precio_compra,
                precio_venta: dto.precio_venta,
                stock: dto.stock,
                codigo_barras: dto.codigo_barras || null,
                estado: true,
                categorias: { connect: { id_categoria: Number(dto.id_categoria) } },
                tiendas: { connect: { id_tienda: idTienda } },
            },
        });
    }
    async buscarTodosPorTienda(idTienda) {
        return await this.prisma.productos.findMany({
            where: { id_tienda: idTienda, estado: true },
            include: { categorias: true },
        });
    }
    async actualizar(id, dto, idTienda) {
        try {
            return await this.prisma.productos.update({
                where: { id_producto: id, id_tienda: idTienda },
                data: dto,
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException('Producto no encontrado en tu tienda.');
            throw error;
        }
    }
    async eliminar(id, idTienda) {
        try {
            return await this.prisma.productos.update({
                where: { id_producto: id, id_tienda: idTienda },
                data: { estado: false },
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException('Producto no encontrado.');
            throw error;
        }
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductosService);
//# sourceMappingURL=productos.service.js.map