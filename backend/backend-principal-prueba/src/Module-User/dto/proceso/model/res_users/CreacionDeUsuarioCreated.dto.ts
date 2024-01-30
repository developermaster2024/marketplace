// src/dto/model/res_users/CreacionDeUsuario.dto.ts
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreacionDeUsuarioCreatedDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly login: string;

  // Otros campos según tus requisitos de salida

  constructor(data: Partial<CreacionDeUsuarioCreatedDto>) {
    Object.assign(this, data);
  }
}
