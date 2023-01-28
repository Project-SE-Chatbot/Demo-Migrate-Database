import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from 'src/typeorm/entities/back_end/Plan';
import { PlanParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan) private planRepository: Repository<Plan>,
  ) {}

  findPlan() {
    return this.planRepository.find();
  }

  createPlan(planDetail: PlanParam) {
    const newPlan = this.planRepository.create(planDetail);
    return this.planRepository.save(newPlan);
  }

  updatePlan(id_plan: number, updatePlan: PlanParam) {
    return this.planRepository.update({ id_plan }, { ...updatePlan });
  }

  deletePlan(id_plan: number) {
    return this.planRepository.delete({ id_plan });
  }

  findPlanByID(id_plan: number) {
    return this.planRepository.findOne({ where: { id_plan } });
  }
}
