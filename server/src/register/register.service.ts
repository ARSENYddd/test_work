import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async registr(userData: any): Promise<any> {
        // Здесь должна быть логика регистрации пользователя
        console.log(userData)
        return { message: 'User registered successfully' };
      }
}
