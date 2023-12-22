import { ResBank } from 'src/Module-User/res-bank/entities/res-bank.entity';
import { ResCompany } from 'src/Module-User/res-company/entities/res-company.entity';
import { ResCountryState } from 'src/Module-User/res-country-state/entities/res-country-state.entity';
import { ResCountry } from 'src/Module-User/res-country/entities/res-country.entity';
import { ResCurrencyRate } from 'src/Module-User/res-currency-rate/entities/res-currency-rate.entity';
import { ResGroupsRules } from 'src/Module-User/res-groups-rules/entities/res-groups-rules.entity';
import { ResGroups } from 'src/Module-User/res-groups/entities/res-groups.entity';
import { ResPartner } from 'src/Module-User/res-partner/entities/res-partner.entity';
import { ResUsersDeletion } from 'src/Module-User/res-users-deletion/entities/res-users-deletion.entity';
import { ResUsersLog } from 'src/Module-User/res-users-log/entities/res-users-log.entity';
import { ResUsersSettingsVolumes } from 'src/Module-User/res-users-settings-volumens/entities/res-users-settings-volumens.entity';
import { ResUsersSettingsVolumesController } from 'src/Module-User/res-users-settings-volumens/res-users-settings-volumens.controller';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_users' })
export class ResUsers {
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

  //-----------------------------------------------------------------
  //Muchos a Muchos ResGroups
  @ManyToMany(() => ResGroups, { cascade: true })
  @JoinTable({
    name: 'res_groups_res_users',
    joinColumn: { name: 'res_users_id' },
    inverseJoinColumn: { name: 'res_groups_id' },
  })
  public resGroups: ResGroups[];

  //Uno a Mucho ResBank
  @OneToMany(() => ResBank, (bank) => bank.user)
  public banks: ResBank;

  //Uno a Mucho ResUsersLog
  @OneToMany(() => ResUsersLog, (usersLog) => usersLog.user)
  public usersLogs: ResUsersLog;

  //Uno a Mucho ResCountryState
  @OneToMany(() => ResCountryState, (countryState) => countryState.user)
  public countryStates: ResCountryState;

  //Uno a Mucho ResCompany
  @OneToMany(() => ResCompany, (company) => company.user)
  public companys: ResCompany;

  //Uno a Mucho ResPartner
  @OneToMany(() => ResPartner, (partner) => partner.user)
  public partners: ResPartner;

  //Uno a Mucho ResCurrencyRate
  @OneToMany(() => ResCurrencyRate, (currencyRate) => currencyRate.user)
  public currencyRates: ResCurrencyRate;

  //Uno a Uno ResUsersDeletion
  @OneToOne(() => ResUsersDeletion, (usersDeletion) => usersDeletion.user)
  public usersDeletion: ResUsersDeletion;

  //Uno a Mucho ResUsersSettingsVolumens
  @OneToMany(
    () => ResUsersSettingsVolumes,
    (settingsVolumes) => settingsVolumes.user,
  )
  public settingsVolumes: ResUsersSettingsVolumes;

  //Uno a Mucho ResCountry
  @OneToMany(() => ResCountry, (country) => country.user)
  public country: ResCountry;

  //Uno a Mucho ResGroupsRules
  @OneToMany(() => ResGroupsRules, (groupsRules) => groupsRules.user)
  public groupsRules: ResGroupsRules;

  //Muchos a Uno ResCompany
  @ManyToOne(() => ResCompany, (company) => company.user)
  @JoinColumn({ name: 'company_id' })
  public company: ResCompany;

  //Muchos a Uno ResPartner
  @ManyToOne(() => ResPartner, (partner) => partner.user)
  @JoinColumn({ name: 'partner_id' })
  public partner: ResPartner;
  //-----------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResUsers>) {
    Object.assign(this, data);
  }
}
