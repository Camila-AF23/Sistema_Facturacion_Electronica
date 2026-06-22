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
exports.FacturasController = void 0;
const common_1 = require("@nestjs/common");
const facturas_service_1 = require("./facturas.service");
const create_factura_dto_1 = require("./dto/create-factura.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let FacturasController = class FacturasController {
    facturasService;
    constructor(facturasService) {
        this.facturasService = facturasService;
    }
    crear(createFacturaDto, req) {
        return this.facturasService.crearFactura(createFacturaDto, req.user.id_tienda, req.user.sub);
    }
    listarHistorial(req, inicio, fin) {
        return this.facturasService.listarYFiltrar(req.user.id_tienda, inicio, fin);
    }
    obtenerReporte(req, inicio, fin) {
        return this.facturasService.obtenerEstadisticas(req.user.id_tienda, inicio, fin);
    }
    async descargarPdf(id, req, res) {
        const pdfBuffer = await this.facturasService.generarPdfFactura(Number(id), req.user.id_tienda);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=Factura_${id}.pdf`,
            'Content-Length': pdfBuffer.length,
        });
        res.end(pdfBuffer);
    }
};
exports.FacturasController = FacturasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factura_dto_1.CreateFacturaDto, Object]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('fechaInicio')),
    __param(2, (0, common_1.Query)('fechaFin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "listarHistorial", null);
__decorate([
    (0, common_1.Get)('/reporte-economico'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('fechaInicio')),
    __param(2, (0, common_1.Query)('fechaFin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "obtenerReporte", null);
__decorate([
    (0, common_1.Get)('/:id/descargar-pdf'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "descargarPdf", null);
exports.FacturasController = FacturasController = __decorate([
    (0, common_1.Controller)('facturas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [facturas_service_1.FacturasService])
], FacturasController);
//# sourceMappingURL=facturas.controller.js.map