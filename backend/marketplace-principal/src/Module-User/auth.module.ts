import { Module } from '@nestjs/common';
import { LoginController } from 'src/Module-User/controllers/auth/login.controller';

@Module({
  controllers: [LoginController],
})
export class AuthModule {}
