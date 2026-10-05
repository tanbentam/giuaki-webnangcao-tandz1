import { Controller, Post, Get, Body } from '@nestjs/common';
import { DangkiService } from './dangki.service';
import { CreateDangkiDto } from './dto/create-dangki.dto';

@Controller('dangki')
export class DangkiController {
  constructor(private readonly dangkiService: DangkiService) {}

  @Post()
  dangKi(@Body() createDangkiDto: CreateDangkiDto) {
    return this.dangkiService.dangKiMonHoc(createDangkiDto);
  }

  @Get()
  layDanhSach() {
    return this.dangkiService.danhSachDangKi();
  }
}