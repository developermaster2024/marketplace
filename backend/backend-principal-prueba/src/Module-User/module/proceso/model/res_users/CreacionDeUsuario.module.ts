import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreacionDeUsuarioController } from 'src/Module-User/controllers/proceso/model/res_users/CreacionDeUsuario.controllers';
import { CreacionDeUsuario } from 'src/Module-User/entities/proceso/model/res_users/CreacionDeUsuario.entity';
import { CreacionDeUsuarioService } from 'src/Module-User/service/proceso/model/res_users/CreacionDeUsuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([CreacionDeUsuario])],
  controllers: [CreacionDeUsuarioController],
  providers: [CreacionDeUsuarioService],
})
export class CreacionDeUsuarioModule {}
