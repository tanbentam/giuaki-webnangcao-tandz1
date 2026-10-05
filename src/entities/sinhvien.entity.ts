import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Dangki } from './dangki.entity';

@Entity()
export class Sinhvien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maSV: string;

  @Column()
  hoTen: string;

  @OneToMany(() => Dangki, dangki => dangki.sinhvien)
  dangkis: Dangki[];
}