import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Monhoc } from './entities/monhoc.entity';
import { CreateMonhocDto } from './dto/create-monhoc.dto';

@Injectable()
export class MonhocService {
  constructor(
    @InjectRepository(Monhoc)
    private monhocRepo: Repository<Monhoc>,
  ) {}

  create(dto: CreateMonhocDto) {
    const mh = this.monhocRepo.create(dto);
    return this.monhocRepo.save(mh);
  }

  findAll() {
    return this.monhocRepo.find();
  }
}
