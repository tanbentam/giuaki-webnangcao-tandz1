import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Dangki } from './dangki.entity';

@Entity()
export class Monhoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maMH: string;

  @Column()
  tenMH: string;

  @OneToMany(() => Dangki, dangki => dangki.monhoc)
  dangkis: Dangki[];
}