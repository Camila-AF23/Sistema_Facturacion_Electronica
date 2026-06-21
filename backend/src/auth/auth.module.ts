import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  imports: [
    // Configuramos el JWT con una clave secreta y un tiempo de expiración de 1 día
    JwtModule.register({
      secret:
        process.env.JWT_SECRET || 'CLAVE_SECRETA_SUPER_SEGURA_DE_EMERGENCIA',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
