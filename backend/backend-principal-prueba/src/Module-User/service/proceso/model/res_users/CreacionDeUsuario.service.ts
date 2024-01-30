// src/services/model/res_users/CreacionDeUsuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreacionDeUsuarioCreatedDto } from 'src/Module-User/dto/proceso/model/res_users/CreacionDeUsuarioCreated.dto';
import { CreacionDeUsuario } from 'src/Module-User/entities/proceso/model/res_users/CreacionDeUsuario.entity';
import { Repository } from 'typeorm';

//Desarrollo del sercicio de la creacion de usuario

@Injectable()
export class CreacionDeUsuarioService {
  constructor(
    @InjectRepository(CreacionDeUsuario)
    private readonly userRepository: Repository<CreacionDeUsuarioCreatedDto>,
  ) {}
  async createUser(
    datosUsuario: CreacionDeUsuarioCreatedDto,
  ): Promise<CreacionDeUsuarioCreatedDto> {
    //Implementación de la creacion del usuario
    const creacionDeUsuario = new CreacionDeUsuario(datosUsuario);
    return await this.userRepository.save(creacionDeUsuario);
  }
}
