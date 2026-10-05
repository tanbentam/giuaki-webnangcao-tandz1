import { Controller, Get, Post, Body } from '@nestjs/common';
import { MonhocService } from './monhoc.service';
import { CreateMonhocDto } from './dto/create-monhoc.dto';

@Controller('monhoc')
export class MonhocController {
  constructor(private readonly monhocService: MonhocService) {}

  @Post()
  create(@Body() dto: CreateMonhocDto) {
    return this.monhocService.create(dto);
  }

  @Get()
  findAll() {
    return this.monhocService.findAll();
  }
}
