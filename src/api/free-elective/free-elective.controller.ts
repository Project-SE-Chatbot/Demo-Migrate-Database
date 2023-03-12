import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { findKeyDTO } from '../dto_global/findKey.dto';
import { Free_ElectiveDTO } from './DTO/elective.dto';
import { updateFree_ElectiveDTO } from './DTO/updateElective.dto';
import { FreeElectiveService } from './free-elective.service';

@Controller('free-elective')
export class FreeElectiveController {
    constructor(private electiveService: FreeElectiveService){}

    @Get()
    async getElective(){
        return await this.electiveService.findElective()
    }

    @Get('key')
    async getElectiveKey(@Body() findTeacher: findKeyDTO){
        return await this.electiveService.findElectiveByKey(findTeacher.key)
    }

    @Post()
    createElective(@Body() createElective: Free_ElectiveDTO){
        this.electiveService.createElective(createElective)
    }

    @Put(':course_code')
    editElective(@Param('course_code') course_code: string, @Body() updateElective: updateFree_ElectiveDTO ){
        this.electiveService.updateElective(parseInt(course_code), updateElective)
    }

    @Delete(':course_code')
    deleteElectiveByID(@Param('course_code') course_code: string){
        this.electiveService.deleteElective(parseInt(course_code))
    }

    @Get(':course_code')
    async findElectiveByID(@Param('course_code') course_code: string){
        return await this.electiveService.findElectiveByCourseCode(parseInt(course_code))
    }
}
