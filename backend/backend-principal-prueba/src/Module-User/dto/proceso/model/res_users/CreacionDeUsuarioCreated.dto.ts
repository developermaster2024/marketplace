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

  @Expose()
  public readonly password: string;

  @Expose()
  public readonly email: string;

  @Expose()
  public readonly company_id: number;

  @Expose()
  public readonly partner_id: number;

  @Expose()
  public readonly active: boolean;

  @Expose()
  public readonly action_id: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly write_uid: number;

  @Expose()
  public readonly signature: string;

  @Expose()
  public readonly share: boolean;

  @Expose()
  public readonly write_date: number;

  @Expose()
  public readonly totp_secret: string;

  @Expose()
  public readonly notification_type: string;

  @Expose()
  public readonly odoobot_state: string;

  @Expose()
  public readonly odoobot_failed: boolean;

  @Expose()
  public readonly sale_team_id: number;

  @Expose()
  public readonly target_sales_won: number;

  @Expose()
  public readonly target_sales_done: number;

  @Expose()
  public readonly karma: number;

  @Expose()
  public readonly rank_id: number;

  @Expose()
  public readonly next_rank_id: number;

  @Expose()
  public readonly target_sales_invoiced: number;

  // Otros campos según tus requisitos de salida de la creacion de usuario

  constructor(data: Partial<CreacionDeUsuarioCreatedDto>) {
    Object.assign(this, data);
  }
}
