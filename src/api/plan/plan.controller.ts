import { Controller, Delete, Get, ParseIntPipe, Put } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { PlanDTO } from './DTO/plan.dto';
import { updatePlanDTO } from './DTO/updatePlan.dto';
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

    @Put(':id')
    editPlan(@Param('id', ParseIntPipe) id: number, @Body() updatePlan: updatePlanDTO ){
        this.planService.updatePlan(id, updatePlan)
    }

    @Delete(':id')
    deletePlanByID(@Param('id', ParseIntPipe) id: number){
        this.planService.deletePlan(id)
    }

    @Get(':id')
    findPlanByID(@Param('id', ParseIntPipe) id: number){
        this.planService.findPlanByID(id)
    }
}
