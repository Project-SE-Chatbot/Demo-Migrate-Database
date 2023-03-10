import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Major_Key } from 'src/typeorm/entities/back_end/Major_Key';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Place_Key } from 'src/typeorm/entities/back_end/Place_Key';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Teacher_Key } from 'src/typeorm/entities/back_end/Teacher_Key';
import { MajorController } from './major.controller';
import { MajorService } from './major.service';

@Module({
  imports: [TypeOrmModule.forFeature([Major, Major_Key, Teacher,Teacher_Key, Place, Place_Key])],
  controllers: [MajorController],
  providers: [MajorService]
})
export class MajorModule {}
