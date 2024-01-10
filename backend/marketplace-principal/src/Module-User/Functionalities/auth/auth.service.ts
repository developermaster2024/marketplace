import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ResUsersService } from 'src/Module-User/res-users/res-users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly resUsersService: ResUsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    //verificar si el email existe en la base de datos
    const user = await this.resUsersService.findOneByEmail(
      registerUserDto.email,
    );

    if (user) {
      throw new BadRequestException('ResUsers alredy exists');
    }

    // Validación adicional: asegurarse de que todos los campos requeridos estén presentes
    if (
      !registerUserDto.name ||
      !registerUserDto.email ||
      !registerUserDto.password ||
      !registerUserDto.login
    ) {
      throw new BadRequestException('All fields are required');
    }

    const register = await this.resUsersService.create(registerUserDto);
    return register;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.resUsersService.findOneByEmail(loginUserDto.email); //buscar en la base de dato el email dto inicio de sesion

    //validacion si el correo electronico es correcto o no si es incorrecto manda un msj email is wrong que ya existe.
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    //comparacion de contraseña
    const ispasswordvalid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    //validacion del password
    if (!ispasswordvalid) {
      throw new UnauthorizedException('password is wrong');
    }
    const { password: userPassword, ...restOfUser } = user;
    const payload = { email: user.email, role: user.role, id: user.id };

    //valida si el usuario esta aprovado o no
    // if (!user.status_approved) {
    //   throw new UnauthorizedException('User is not approved.');
    // }
    // return {
    //   user: restOfUser,
    //   access_token: await this.jwtService.signAsync(payload),
    // };
  }

  //profile con roles
  async profile({ email, role }: { email: string; role: string }) {
    return await this.resUsersService.findOneByEmail(email);
  }
}
