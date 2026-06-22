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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const productos_service_1 = require("./productos.service");
const create_producto_dto_1 = require("./dto/create-producto.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ProductosController = class ProductosController {
    productosService;
    constructor(productosService) {
        this.productosService = productosService;
    }
    crear(createProductoDto, req) {
        if (req.user.id_rol !== 1) {
            throw new common_1.ForbiddenException('Solo los administradores pueden registrar productos.');
        }
        return this.productosService.crear(createProductoDto, req.user.id_tienda);
    }
    buscarTodos(req) {
        return this.productosService.buscarTodosPorTienda(req.user.id_tienda);
    }
    actualizar(id, updateDto, req) {
        if (req.user.id_rol !== 1) {
            throw new common_1.ForbiddenException('Solo los administradores pueden editar productos.');
        }
        return this.productosService.actualizar(Number(id), updateDto, req.user.id_tienda);
    }
    eliminar(id, req) {
        if (req.user.id_rol !== 1) {
            throw new common_1.ForbiddenException('Solo los administradores pueden eliminar productos.');
        }
        return this.productosService.eliminar(Number(id), req.user.id_tienda);
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "buscarTodos", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "eliminar", null);
exports.ProductosController = ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map