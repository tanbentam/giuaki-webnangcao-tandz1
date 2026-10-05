import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sinhvien } from './entities/sinhvien.entity';
import { Monhoc } from './entities/monhoc.entity';
import { Dangki } from './entities/dangki.entity';
import { DangkiController } from './dangki.controller';
import { DangkiService } from './dangki.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'quanly_dangki',
      entities: [Sinhvien, Monhoc, Dangki],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Sinhvien, Monhoc, Dangki])
  ],
  controllers: [DangkiController],
  providers: [DangkiService],
})
export class AppModule {}