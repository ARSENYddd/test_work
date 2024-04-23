import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { RegistrationController } from './register/register.controller';
import { RegisterService } from './register/register.service';

@Module({
  imports: [],
  controllers: [AppController,AuthController,RegistrationController],
  providers: [AppService, AuthService,AuthService, RegisterService],
})
export class AppModule {}
