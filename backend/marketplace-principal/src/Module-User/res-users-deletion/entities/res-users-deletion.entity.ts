import { ResUsers } from 'src/Module-User/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_users_deletion' })
export class ResUsersDeletion {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  @Column({ name: 'user_id_int', type: 'int' })
  public readonly user_id_int: number;

  @Column({ name: 'create_uid', type: 'int' })
  public readonly create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public readonly write_uid: number;

  @Column({ name: 'state', type: 'varchar' })
  public readonly state: string;

  //----------------------------------------------------------
  //Uno a Uno ResUsers
  @OneToOne(() => ResUsers, (user) => user.usersDeletion)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;
  //----------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResUsersDeletion>) {
    Object.assign(this, data);
  }
}
