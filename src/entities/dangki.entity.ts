import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Sinhvien } from './sinhvien.entity';
import { Monhoc } from './monhoc.entity';

@Entity()
export class Dangki {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sinhvien, sinhvien => sinhvien.dangkis)
  sinhvien: Sinhvien;

  @ManyToOne(() => Monhoc, monhoc => monhoc.dangkis)
  monhoc: Monhoc;

  @CreateDateColumn()
  ngayDangKi: Date;
}