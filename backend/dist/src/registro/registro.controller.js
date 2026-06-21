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
exports.RegistroController = void 0;
const common_1 = require("@nestjs/common");
const registro_service_1 = require("./registro.service");
const create_registro_dto_1 = require("./dto/create-registro.dto");
let RegistroController = class RegistroController {
    registroService;
    constructor(registroService) {
        this.registroService = registroService;
    }
    crearSistemaCompleto(createRegistroDto) {
        return this.registroService.registrarTiendaYDueno(createRegistroDto);
    }
};
exports.RegistroController = RegistroController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registro_dto_1.CreateRegistroDto]),
    __metadata("design:returntype", void 0)
], RegistroController.prototype, "crearSistemaCompleto", null);
exports.RegistroController = RegistroController = __decorate([
    (0, common_1.Controller)('registro'),
    __metadata("design:paramtypes", [registro_service_1.RegistroService])
], RegistroController);
//# sourceMappingURL=registro.controller.js.map