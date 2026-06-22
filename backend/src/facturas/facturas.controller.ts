import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { Response } from 'express';

@Controller('facturas')
@UseGuards(JwtAuthGuard)
export class FacturasController {
  constructor(private readonly facturasService: FacturasService) {}

  // 1. Emitir la factura (Admin y Cajero autorizados)
  @Post()
  crear(@Body() createFacturaDto: CreateFacturaDto, @Req() req: any) {
    return this.facturasService.crearFactura(
      createFacturaDto,
      req.user.id_tienda,
      req.user.sub,
    );
  }

  // 2. Listar e Historial con filtros de Fecha opcionales
  @Get()
  listarHistorial(
    @Req() req: any,
    @Query('fechaInicio') inicio?: string,
    @Query('fechaFin') fin?: string,
  ) {
    return this.facturasService.listarYFiltrar(req.user.id_tienda, inicio, fin);
  }

  // 3. Reporte estadístico económico de un periodo determinado
  @Get('/reporte-economico')
  obtenerReporte(
    @Req() req: any,
    @Query('fechaInicio') inicio: string,
    @Query('fechaFin') fin: string,
  ) {
    return this.facturasService.obtenerEstadisticas(
      req.user.id_tienda,
      inicio,
      fin,
    );
  }

  // DESCARGA AUTOMÁTICA DEL PDF DESDE EL NAVEGADOR
  @Get('/:id/descargar-pdf')
  async descargarPdf(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    const pdfBuffer = await this.facturasService.generarPdfFactura(
      Number(id),
      req.user.id_tienda,
    );

    // Configuramos las cabeceras HTTP para descarga obligatoria de archivo
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=Factura_${id}.pdf`,
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }
}
