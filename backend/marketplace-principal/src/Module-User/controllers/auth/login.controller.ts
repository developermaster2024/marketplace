import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class LoginController {
  @Post('login')
  async login() {
    return 'este es el login';
  }
}
