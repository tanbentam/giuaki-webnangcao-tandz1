import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sinhvien } from './entities/sinhvien.entity';
import { CreateSinhvienDto } from './dto/create-sinhvien.dto';

@Injectable()
export class SinhvienService {
  constructor(
    @InjectRepository(Sinhvien)
    private sinhvienRepo: Repository<Sinhvien>,
  ) {}

  create(dto: CreateSinhvienDto) {
    const sv = this.sinhvienRepo.create(dto);
    return this.sinhvienRepo.save(sv);
  }

  findAll() {
    return this.sinhvienRepo.find();
  }
}
