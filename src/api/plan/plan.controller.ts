import { Controller, Delete, Get, Put } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { PlanDTO } from './DTO/plan.dto';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {
    constructor(private planService: PlanService){}

    @Get()
    async getMajor(){
        return await this.planService.findPlan()
    }

    @Post()
    createMajor(@Body() createPlan: PlanDTO){
        this.planService.createPlan(createPlan)
    }

    @Put()
    editMajor(){

    }

    @Delete()
    deleteMajorByID(){
        
    }
}
