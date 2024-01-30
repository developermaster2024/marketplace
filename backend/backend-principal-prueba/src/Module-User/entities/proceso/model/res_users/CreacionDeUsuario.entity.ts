import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_users' })
export class CreacionDeUsuario {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'login', type: 'varchar', length: 255 })
  public login: string;

  @Column({ name: 'password', type: 'varchar', length: 50 })
  public password: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  public email: string;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'active', type: 'tinyint', default: 0 })
  public active: boolean;

  @Column({ name: 'action_id', type: 'int' })
  public action_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'signature', type: 'varchar', length: 255 })
  public signature: string;

  @Column({ name: 'share', type: 'tinyint', default: 0 })
  public share: boolean;

  @Column({ name: 'write_date', type: 'int' })
  public write_date: number;

  @Column({ name: 'totp_secret', type: 'varchar', length: 255 })
  public totp_secret: string;

  @Column({ name: 'notification_type', type: 'varchar', length: 255 })
  public notification_type: string;

  @Column({ name: 'odoobot_state', type: 'varchar', length: 255 })
  public odoobot_state: string;

  @Column({ name: 'odoobot_failed', type: 'tinyint', default: 0 })
  public odoobot_failed: boolean;

  @Column({ name: 'sale_team_id', type: 'int' })
  public sale_team_id: number;

  @Column({ name: 'target_sales_won', type: 'int' })
  public target_sales_won: number;

  @Column({ name: 'target_sales_done', type: 'int' })
  public target_sales_done: number;

  @Column({ name: 'karma', type: 'int' })
  public karma: number;

  @Column({ name: 'rank_id', type: 'int' })
  public rank_id: number;

  @Column({ name: 'next_rank_id', type: 'int' })
  public next_rank_id: number;

  @Column({ name: 'target_sales_invoiced', type: 'int' })
  public target_sales_invoiced: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<CreacionDeUsuario>) {
    Object.assign(this, data);
  }
}
