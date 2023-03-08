import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Degree_Key } from 'src/typeorm/entities/back_end/Degree_Key';
import { DegreeController } from './degree.controller';
import { DegreeService } from './degree.service';

@Module({
  imports: [TypeOrmModule.forFeature([Degree, Degree_Key])],
  controllers: [DegreeController],
  providers: [DegreeService]
})
export class DegreeModule {}
