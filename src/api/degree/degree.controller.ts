import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DegreeService } from './degree.service';
import { DegreeDTO } from './DTO/degree.dto';
import { updateDegreeDTO } from './DTO/updateDegree.dto';

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

    @Put(':id')
    editDegree(@Param('id', ParseIntPipe) id: number, @Body() updateDegree: updateDegreeDTO ){
        this.degreeService.updateDegree(id, updateDegree)
    }

    @Delete(':id')
    deleteDegreeByID(@Param('id', ParseIntPipe) id: number){
        this.degreeService.deleteDegree(id)
    }

    @Get(':id')
    async findDegreeByID(@Param('id', ParseIntPipe) id: number){
        return await this.degreeService.findDegreeByID(id)
    }
}
