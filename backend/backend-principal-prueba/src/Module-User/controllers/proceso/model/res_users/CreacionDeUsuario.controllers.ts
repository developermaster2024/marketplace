import { Controller, Post, Body } from '@nestjs/common';
import { CreacionDeUsuarioCreatedDto } from 'src/Module-User/dto/proceso/model/res_users/CreacionDeUsuarioCreated.dto';
import { CreacionDeUsuarioService } from 'src/Module-User/service/proceso/model/res_users/CreacionDeUsuario.service';

@Controller('res_users/creacion_de_usuario')
export class CreacionDeUsuarioController {
  constructor(private readonly userService: CreacionDeUsuarioService) {}

  @Post()
  async createUser(@Body() datosUsuario: CreacionDeUsuarioCreatedDto) {
    return await this.userService.createUser(datosUsuario);
  }
}
