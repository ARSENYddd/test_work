import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegistrationController {
  constructor(private readonly RegisterService: RegisterService) {}

  @Post('register')
  async register(@Body() body: any) {
    return this.RegisterService.registr(body);
  }
}