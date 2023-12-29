import { ResCompany } from 'src/Module-User/res-company/entities/res-company.entity';
import { ResCountry } from 'src/Module-User/res-country/entities/res-country.entity';
import { ResUsersSettingsVolumes } from 'src/Module-User/res-users-settings-volumens/entities/res-users-settings-volumens.entity';
import { ResUsers } from 'src/Module-User/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_partner' })
export class ResPartner {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'company_id', type: 'int' })
  public readonly company_id: number;

  @Column({ name: 'title', type: 'varchar', length: 255 })
  public readonly title: string;

  @Column({ name: 'parent_id', type: 'int' })
  public readonly parent_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  @Column({ name: 'state_id', type: 'int' })
  public readonly state_id: number;

  @Column({ name: 'country_id', type: 'int' })
  public readonly country_id: number;

  @Column({ name: 'industry_id', type: 'int' })
  public readonly industry_id: number;

  @Column({ name: 'color', type: 'int' })
  public readonly color: number;

  @Column({ name: 'commercial_partner_id', type: 'int' })
  public readonly commercial_partner_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public readonly create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public readonly write_uid: number;

  @Column({ name: 'display_name', type: 'varchar', length: 255 })
  public readonly display_name: string;

  @Column({ name: 'ref', type: 'varchar', length: 255 })
  public readonly ref: string;

  @Column({ name: 'lang', type: 'varchar', length: 255 })
  public readonly lang: string;

  @Column({ name: 'tz', type: 'varchar', length: 255 })
  public readonly tz: string;

  @Column({ name: 'vat', type: 'varchar', length: 255 })
  public readonly vat: string;

  @Column({ name: 'company_registry', type: 'varchar', length: 255 })
  public readonly company_registry: string;

  @Column({ name: 'website', type: 'varchar', length: 255 })
  public readonly website: string;

  @Column({ name: 'street', type: 'varchar', length: 255 })
  public readonly street: string;

  @Column({ name: 'street2', type: 'varchar', length: 255 })
  public readonly street2: string;

  @Column({ name: 'zip', type: 'varchar', length: 255 })
  public readonly zip: string;

  @Column({ name: 'city', type: 'varchar', length: 255 })
  public readonly city: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  public readonly email: string;

  @Column({ name: 'phone', type: 'varchar', length: 255 })
  public readonly phone: string;

  @Column({ name: 'mobile', type: 'varchar', length: 255 })
  public readonly mobile: string;

  @Column({ name: 'commercial_company_name', type: 'varchar', length: 255 })
  public readonly commercial_company_name: string;

  @Column({ name: 'company_name', type: 'varchar', length: 255 })
  public readonly company_name: string;

  @Column({ name: 'date', type: 'date' })
  public readonly date: Date;

  @Column({ name: 'comment', type: 'varchar', length: 255 })
  public readonly comment: string;

  @Column({ name: 'partner_latitude', type: 'int' })
  public readonly partner_latitude: number;

  @Column({ name: 'partner_longitude', type: 'int' })
  public readonly partner_longitude: number;

  @Column({ name: 'active', type: 'tinyint' })
  public readonly active: boolean;

  @Column({ name: 'employee', type: 'tinyint' })
  public readonly employee: boolean;

  @Column({ name: 'is_company', type: 'tinyint' })
  public readonly is_company: boolean;

  @Column({ name: 'partner_share', type: 'tinyint' })
  public readonly partner_share: boolean;

  @Column({ name: 'write_date', type: 'date' })
  public readonly write_date: Date;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public readonly message_main_attachment_id: number;

  @Column({ name: 'message_bounce', type: 'int' })
  public readonly message_bounce: number;

  @Column({ name: 'email_normalized', type: 'varchar', length: 255 })
  public readonly email_normalized: string;

  @Column({ name: 'signup_token', type: 'varchar', length: 255 })
  public readonly signup_token: string;

  @Column({ name: 'signup_type', type: 'varchar', length: 255 })
  public readonly signup_type: string;

  @Column({ name: 'signup_expiration', type: 'int' })
  public readonly signup_expiration: Date;

  @Column({ name: 'calendar_last_notif_ack', type: 'int' })
  public readonly calendar_last_notif_ack: Date;

  @Column({ name: 'team_id', type: 'int' })
  public readonly team_id: number;

  @Column({ name: 'partner_gid', type: 'int' })
  public readonly partner_gid: number;

  @Column({ name: 'additional_info', type: 'varchar', length: 255 })
  public readonly additional_info: string;

  @Column({ name: 'phone_sanitized', type: 'varchar', length: 255 })
  public readonly phone_sanitized: string;

  @Column({ name: 'picking_warn', type: 'varchar', length: 255 })
  public readonly picking_warn: string;

  @Column({ name: 'picking_warn_msg', type: 'varchar', length: 255 })
  public readonly picking_warn_msg: string;

  @Column({ name: 'supplier_rank', type: 'int' })
  public readonly supplier_rank: number;

  @Column({ name: 'customer_rank', type: 'int' })
  public readonly customer_rank: number;

  @Column({ name: 'invoice_warn', type: 'varchar', length: 255 })
  public readonly invoice_warn: string;

  @Column({ name: 'invoice_warn_msg', type: 'varchar', length: 255 })
  public readonly invoice_warn_msg: string;

  @Column({ name: 'debit_limit', type: 'int' })
  public readonly debit_limit: number;

  @Column({ name: 'last_time_entries_checked', type: 'int' })
  public readonly last_time_entries_checked: Date;

  @Column({ name: 'purchase_warn', type: 'varchar', length: 255 })
  public readonly purchase_warn: string;

  @Column({ name: 'purchase_warn_msg', type: 'int' })
  public readonly purchase_warn_msg: boolean;

  @Column({ name: 'sale_warn', type: 'varchar', length: 255 })
  public readonly sale_warn: string;

  @Column({ name: 'sale_warn_msg', type: 'int' })
  public readonly sale_warn_msg: boolean;

  //--------------------------------------------------------------------
  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.partners)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  //Muchos a Uno ResUsersSettingsVolumens
  @ManyToOne(
    () => ResUsersSettingsVolumes,
    (settingsVolumes) => settingsVolumes.partners,
  )
  @JoinColumn({ name: 'user_id' })
  public settingsVolumes: ResUsersSettingsVolumes;

  //Uno a Mucho Rescompany
  @OneToMany(() => ResCompany, (company) => company.partner)
  public company: ResCompany;

  //Muchos a Uno ResCompany
  @ManyToOne(() => ResCompany, (companys) => companys.partners)
  @JoinColumn({ name: 'company_id' })
  public companys: ResCompany;

  //Muchos a Uno Respartner
  @ManyToOne(() => ResCountry, (country) => country.partner)
  @JoinColumn({ name: 'country_id' })
  public country: ResCountry;

  //Uno a Mucho ResUser
  @OneToMany(() => ResUsers, (user) => user.partner)
  public users: ResUsers;
  //--------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResPartner>) {
    Object.assign(this, data);
  }
}
