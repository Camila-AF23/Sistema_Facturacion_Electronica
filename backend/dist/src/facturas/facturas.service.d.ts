import { PrismaService } from '../database/prisma.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
export declare class FacturasService {
    private prisma;
    constructor(prisma: PrismaService);
    crearFactura(dto: CreateFacturaDto, idTienda: number, idUsuario: number): Promise<{
        ok: boolean;
        mensaje: string;
        id_factura: number;
        numero_factura: string;
    }>;
    listarYFiltrar(idTienda: number, fechaInicio?: string, fechaFin?: string): Promise<({
        clientes: {
            documento_cliente: string;
            nombre_cliente: string;
        };
        usuarios: {
            nombre: string;
        };
    } & {
        id_tienda: number;
        id_cliente: number;
        id_factura: number;
        numero_factura: string;
        fecha: Date;
        total: import("@prisma/client/runtime/library").Decimal;
        id_usuario: number;
        id_pago: number;
    })[]>;
    obtenerEstadisticas(idTienda: number, fechaInicio: string, fechaFin: string): Promise<{
        periodo: {
            desde: string;
            hasta: string;
        };
        total_ingresos: number;
        total_ventas_realizadas: number;
    }>;
    generarPdfFactura(idFactura: number, idTienda: number): Promise<Buffer>;
}
