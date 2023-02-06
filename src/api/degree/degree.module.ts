import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { DegreeController } from './degree.controller';
import { DegreeService } from './degree.service';

@Module({
  imports: [TypeOrmModule.forFeature([Degree])],
  controllers: [DegreeController],
  providers: [DegreeService]
})
export class DegreeModule {}
