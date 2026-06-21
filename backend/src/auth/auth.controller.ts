import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // Cambia el estado por defecto de POST (21) a OK (200) para peticiones de Login
  @Post('login')
  iniciarSesion(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
