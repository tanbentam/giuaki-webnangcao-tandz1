import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dangki } from './entities/dangki.entity';
import { CreateDangkiDto } from './dto/create-dangki.dto';

@Injectable()
export class DangkiService {
  constructor(
    @InjectRepository(Dangki)
    private dangkiRepo: Repository<Dangki>,
  ) {}

  async dangKiMonHoc(dto: CreateDangkiDto) {
    const dangki = this.dangkiRepo.create({
      sinhvien: { id: dto.sinhvienId },
      monhoc: { id: dto.monhocId }
    });
    return this.dangkiRepo.save(dangki);
  }

  async danhSachDangKi() {
    return this.dangkiRepo.find({
      relations: ['sinhvien', 'monhoc'],
    });
  }
}