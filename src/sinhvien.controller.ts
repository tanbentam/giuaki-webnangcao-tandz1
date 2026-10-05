import { Controller, Get, Post, Body } from '@nestjs/common';
import { SinhvienService } from './sinhvien.service';
import { CreateSinhvienDto } from './dto/create-sinhvien.dto';

@Controller('sinhvien')
export class SinhvienController {
  constructor(private readonly sinhvienService: SinhvienService) {}

  @Post()
  create(@Body() dto: CreateSinhvienDto) {
    return this.sinhvienService.create(dto);
  }

  @Get()
  findAll() {
    return this.sinhvienService.findAll();
  }
}
