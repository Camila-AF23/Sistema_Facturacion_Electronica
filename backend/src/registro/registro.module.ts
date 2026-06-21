import { Module } from '@nestjs/common';
import { RegistroController } from './registro.controller';
import { RegistroService } from './registro.service';
import { PrismaService } from '../database/prisma.service';
import { PrismaModule } from '../database/prisma.module';

@Module({
  controllers: [RegistroController],
  providers: [RegistroService, PrismaService],
  imports: [PrismaModule],
})
export class RegistroModule {}
