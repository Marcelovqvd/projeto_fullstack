import { Users } from 'src/users/entities/user.entity';
import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
@Unique(['cnpj'])
export class Companies {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  website: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  cnpj: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (company) => Companies)
  user: Users;
}
