import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { createTeacher } from 'src/ultils/types';
import { Free_ElectiveDTO } from '../free-elective/DTO/elective.dto';
import { PlaceDTO } from '../place/DTO/place.dto';
import { TeacherDTO } from '../teacher/DTO/teacher.dto';
import { createMajorTeacherDTO } from './DTO/createMajorTeacher.dto';
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

    @Post()
    createMajor(@Body() createMajor: MajorDTO){
        if(createMajor.name != null)
            this.majorService.createMajor(createMajor)
    }

    @Post(':id/place')
    createPlace(@Param('id', ParseIntPipe) id: number,
    @Body() createPlace: PlaceDTO){
        this.majorService.createPlace(id, createPlace)
    }

    @Post(':id/review')
    createReview(@Param('id', ParseIntPipe) id: number,
    @Body() createReview: Free_ElectiveDTO){
        this.majorService.createReview(id, createReview)
    }

    @Post(':id/teacher')
    createTeacher(@Param('id', ParseIntPipe) id: number,
    @Body() createTeacher: createTeacher){
        this.majorService.createTeacher(id, createTeacher)
    }

    @Put(':id')
    editMajor(@Param('id', ParseIntPipe) id: number, @Body() updateMajor: updateMajorDTO ){
        this.majorService.updateMajor(id, updateMajor)
    }

    @Delete(':id')
    deleteMajorByID(@Param('id', ParseIntPipe) id: number){
        this.majorService.deleteMajorID(id)
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

    @Get('place')
    async findMajorByName(@Body() findName: findNameDTO){
        return await this.majorService.findMajorByName(findName.name)
    }
}
