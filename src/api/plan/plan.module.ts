import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from 'src/typeorm/entities/back_end/Plan';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  controllers: [PlanController],
  providers: [PlanService]
})
export class PlanModule {}
