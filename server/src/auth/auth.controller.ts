import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  async auth(@Body() body: any) {
    return this.authService.auth(body);
  }
}