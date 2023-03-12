import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { findKeyDTO } from '../dto_global/findKey.dto';
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

    @Get('key')
    async getDegreeKey(@Body() findDegree: findKeyDTO){
        return await this.degreeService.findDegreeByKey(findDegree.key)
    }

    @Post()
    createDegree(@Body() createDegreeDTO: DegreeDTO){
        this.degreeService.createDegree(createDegreeDTO)
    }

    @Put(':name')
    editDegree(@Param('name') name: string, @Body() updateDegree: updateDegreeDTO ){
        this.degreeService.updateDegree(name, updateDegree)
    }

    @Delete(':name')
    deleteDegreeByname(@Param('name') name: string){
        this.degreeService.deleteDegree(name)
    }

    @Get(':name')
    async findDegreeByname(@Param('name') name: string){
        return await this.degreeService.findDegreeByName(name)
    }
}
