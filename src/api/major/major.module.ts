import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { MajorController } from './major.controller';
import { MajorService } from './major.service';

@Module({
  imports: [TypeOrmModule.forFeature([Major, Place, Free_Elective, Teacher])],
  controllers: [MajorController],
  providers: [MajorService]
})
export class MajorModule {}
