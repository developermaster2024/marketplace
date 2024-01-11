import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Auth } from './decorators/auth.decorator';
import { Role } from './enums/rol.enum';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerUserDto: RegisterUserDto,
  ) {
    // console.log(registerUserDto);
    return this.authService.register(registerUserDto);
  }

  @Post('login')
  login(
    @Body()
    loginUserDto: LoginUserDto,
  ) {
    // console.log(loginUserDto);
    return this.authService.login(loginUserDto);
  }

  @Get('profile')
  // @Auth(Role.USUARIO)
  profile(@Req() req: RequestWithUser) {
    console.log(req.user);
    return this.authService.profile(req.user);
  }
}
