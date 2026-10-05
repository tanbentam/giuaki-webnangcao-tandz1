import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dangki } from './entities/dangki.entity';
import { Sinhvien } from './entities/sinhvien.entity';
import { Monhoc } from './entities/monhoc.entity';
import { CreateDangkiDto } from './dto/create-dangki.dto';

@Injectable()
export class DangkiService {
  constructor(
    @InjectRepository(Dangki)
    private dangkiRepo: Repository<Dangki>,
    @InjectRepository(Sinhvien)
    private sinhvienRepo: Repository<Sinhvien>,
    @InjectRepository(Monhoc)
    private monhocRepo: Repository<Monhoc>,
  ) {}

  // Câu 3.3: Sinh viên đăng ký môn học, lưu vào bảng Dangki
  async dangKiMonHoc(dto: CreateDangkiDto) {
    const sinhvien = await this.sinhvienRepo.findOne({
      where: { id: dto.sinhvienId },
    });
    if (!sinhvien) {
      throw new NotFoundException(
        `Không tìm thấy sinh viên với id=${dto.sinhvienId}`,
      );
    }

    const monhoc = await this.monhocRepo.findOne({
      where: { id: dto.monhocId },
    });
    if (!monhoc) {
      throw new NotFoundException(
        `Không tìm thấy môn học với id=${dto.monhocId}`,
      );
    }

    const dangki = this.dangkiRepo.create({ sinhvien, monhoc });
    return this.dangkiRepo.save(dangki);
  }

  // Câu 3.4: Liệt kê danh sách sinh viên đăng ký
  async danhSachDangKi() {
    return this.dangkiRepo.find({
      relations: { sinhvien: true, monhoc: true },
      order: { ngayDangKi: 'DESC' },
    });
  }
}