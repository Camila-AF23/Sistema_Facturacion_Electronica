import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import type { Response } from 'express';
export declare class FacturasController {
    private readonly facturasService;
    constructor(facturasService: FacturasService);
    crear(createFacturaDto: CreateFacturaDto, req: any): Promise<{
        ok: boolean;
        mensaje: string;
        id_factura: number;
        numero_factura: string;
    }>;
    listarHistorial(req: any, inicio?: string, fin?: string): Promise<({
        clientes: {
            documento_cliente: string;
            nombre_cliente: string;
        };
        usuarios: {
            nombre: string;
        };
    } & {
        id_factura: number;
        numero_factura: string;
        fecha: Date;
        total: import("@prisma/client/runtime/library").Decimal;
        id_usuario: number;
        id_cliente: number;
        id_tienda: number;
        id_pago: number;
    })[]>;
    obtenerReporte(req: any, inicio: string, fin: string): Promise<{
        periodo: {
            desde: string;
            hasta: string;
        };
        total_ingresos: number;
        total_ventas_realizadas: number;
    }>;
    descargarPdf(id: string, req: any, res: Response): Promise<void>;
}
