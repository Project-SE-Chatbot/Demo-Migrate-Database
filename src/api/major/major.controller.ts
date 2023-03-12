import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { findKeyDTO } from '../dto_global/findKey.dto';
import { TeacherAndPlaceForMajorDTO } from './DTO/createMajorTeacher.dto';
import { findNameDTO } from './DTO/findName.dto';
import { MajorDTO } from './DTO/major.dto';
import { updateMajorDTO } from './DTO/updateMajor.dto';
import { MajorService } from './major.service';

@Controller('major')
export class MajorController {
    constructor(private majorService: MajorService){}

    @Get()
    async getMajor(){  
        return await this.majorService.findMajor()
    }

    @Get('key')
    async getMajorKey(@Body() findMajor: findKeyDTO){
        return await this.majorService.findMajorByKey(findMajor.key)
    }

    @Post()
    createMajor(@Body() createMajor: MajorDTO){
        if(createMajor.name != null)
            this.majorService.createMajor(createMajor)
    }

    @Put('edit')
    editTeacherAndPlace(@Body() updateTeacherAndPlaceMajor: TeacherAndPlaceForMajorDTO ){  
        this.majorService.configTeacherANDPlaceMajor(updateTeacherAndPlaceMajor)
    }

    @Put(':course_code')
    editPlace(@Param('course_code') course_code: string, @Body() updateMajor: updateMajorDTO){
        this.majorService.updateMajor(course_code, updateMajor)
    }

    @Delete(':course_code')
    deleteMajorByID(@Param('course_code') course_code: string){
        this.majorService.deleteMajorID(course_code)
    }

    @Delete()
    deleteMajor(){
        this.majorService.deleteMajor()
    }

    // @Get(':id')
    // async findMajorByID(@Param('id', ParseIntPipe) id: number){
    //     return await this.majorService.findMajorByID(id)
    // }

    @Get(':code')
    async findMajorByCode(@Param('code') code: string){
        return await this.majorService.findMajorByCode(code)
    }
}
