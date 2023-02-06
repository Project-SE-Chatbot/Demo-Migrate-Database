import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { MajorController } from './major.controller';
import { MajorService } from './major.service';

@Module({
  imports: [TypeOrmModule.forFeature([Major, Place])],
  controllers: [MajorController],
  providers: [MajorService]
})
export class MajorModule {}
