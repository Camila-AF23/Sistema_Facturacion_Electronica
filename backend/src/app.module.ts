import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
//import { AuthModule } from './auth/auth.module';
//import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, RegistroModule], //AuthModule, ContactModule
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
