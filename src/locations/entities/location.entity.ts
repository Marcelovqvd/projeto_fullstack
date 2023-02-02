import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  cep: string;

  @Column({ nullable: false, type: 'varchar' })
  rua: string;

  @Column({ nullable: false, type: 'varchar' })
  numero: number;

  @Column({ nullable: false, type: 'varchar' })
  bairro: string;

  @Column({ nullable: false, type: 'varchar' })
  cidade: string;

  @Column({ nullable: false, type: 'varchar' })
  estado: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
