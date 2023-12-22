import { ResPartner } from 'src/Module-User/res-partner/entities/res-partner.entity';
import { ResUsers } from 'src/Module-User/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_users_settings_volumens' })
export class ResUsersSettingsVolumes {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'user_setting_id', type: 'int' })
  public readonly user_setting_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public readonly partner_id: number;

  @Column({ name: 'guest_id', type: 'int' })
  public readonly guest_id: number;

  @Column({ name: 'create_uid', type: 'int' }) s;
  public readonly create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public readonly write_uid: number;

  @Column({ name: 'volume', type: 'double' })
  public readonly volume: number;

  //----------------------------------------------------------
  //Uno a Uno ResUsers
  @OneToOne(() => ResUsers, (user) => user.settingsVolumes)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  //Uno a Mucho ResPartner
  @OneToMany(() => ResPartner, (partner) => partner.settingsVolumes)
  public partners: ResPartner;

  //Muchos a Uno ResPartner
  @ManyToOne(() => ResPartner, (partner) => partner.settingsVolumes)
  @JoinColumn({ name: 'partner_id' })
  public partner: ResPartner;
  //----------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResUsersSettingsVolumes>) {
    Object.assign(this, data);
  }
}
