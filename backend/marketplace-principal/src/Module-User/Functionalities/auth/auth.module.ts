import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ResUsersModule } from 'src/Module-User/res-users/res-users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';
import { ResUsersService } from 'src/Module-User/res-users/res-users.service';

@Module({
  imports: [
    ResUsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '90d' },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, ResUsersService],
  exports: [AuthService],
})
export class AuthModule {}
