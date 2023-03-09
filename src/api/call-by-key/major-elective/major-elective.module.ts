import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Major_Elective_Key } from 'src/typeorm/entities/back_end/Major_Elective_Key';
import { MajorElectiveController } from './major-elective.controller';
import { MajorElectiveService } from './major-elective.service';

@Module({
  imports: [TypeOrmModule.forFeature([Major_Elective_Key])],
  controllers: [MajorElectiveController],
  providers: [MajorElectiveService]
})
export class MajorElectiveModule {}
