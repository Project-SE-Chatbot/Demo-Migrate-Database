import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DegreeService } from './degree.service';
import { DegreeDTO } from './DTO/degree.dto';

@Controller('degree')
export class DegreeController {
    constructor(private degreeService: DegreeService){}
    @Get()
    async getDegree(){
        return await this.degreeService.findDegree()
    }

    @Post()
    createDegree(@Body() createDegreeDTO: DegreeDTO){
        this.degreeService.createDegree(createDegreeDTO)
    }

    @Put()
    editDegree(){

    }

    @Delete()
    deleteDegreeByID(){
        
    }
}
