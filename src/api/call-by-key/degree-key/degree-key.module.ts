import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Degree_Key } from 'src/typeorm/entities/back_end/Degree_Key';
import { DegreeKeyController } from './degree-key.controller';
import { DegreeKeyService } from './degree-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Degree_Key])],
  controllers: [DegreeKeyController],
  providers: [DegreeKeyService]
})
export class DegreeKeyModule {}
