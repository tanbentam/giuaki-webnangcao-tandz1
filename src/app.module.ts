import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Sinhvien } from './entities/sinhvien.entity';
import { Monhoc } from './entities/monhoc.entity';
import { Dangki } from './entities/dangki.entity';

// Controllers
import { SinhvienController } from './sinhvien.controller';
import { MonhocController } from './monhoc.controller';
import { DangkiController } from './dangki.controller';

// Services
import { SinhvienService } from './sinhvien.service';
import { MonhocService } from './monhoc.service';
import { DangkiService } from './dangki.service';

@Module({
  imports: [
    // Câu 3.1: Kết nối Aiven MySQL (SSL bắt buộc)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-1f51fb76-tandz1-aiven.i.aivencloud.com',
      port: 10148,
      username: 'avnadmin',
      password: 'AVNS_TXFt18qElRZxv_UFofi',
      database: 'defaultdb',
      entities: [Sinhvien, Monhoc, Dangki],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    // Câu 3.2: Đăng ký Repository
    TypeOrmModule.forFeature([Sinhvien, Monhoc, Dangki]),
  ],
  // Câu 3.2: Controllers
  controllers: [SinhvienController, MonhocController, DangkiController],
  // Câu 3.2: Services
  providers: [SinhvienService, MonhocService, DangkiService],
})
export class AppModule {}