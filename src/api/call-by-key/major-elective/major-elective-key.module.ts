import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Major_Elective_Key } from 'src/typeorm/entities/back_end/Major_Elective_Key';
import { MajorElectiveKeyController } from './major-elective-key.controller';
import { MajorElectiveKeyService } from './major-elective-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Major_Elective_Key])],
  controllers: [MajorElectiveKeyController],
  providers: [MajorElectiveKeyService]
})
export class MajorElectiveKeyModule {}
