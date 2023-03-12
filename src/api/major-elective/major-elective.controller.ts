import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { findKeyDTO } from '../dto_global/findKey.dto';
import { majorElectiveDTO } from './dto/majorElective.dto';
import { MajorElectiveService } from './major-elective.service';

@Controller('major-elective')
export class MajorElectiveController {

    constructor(private majorElectiveService: MajorElectiveService){}
    
    @Get()
    async getPlace(){
        return await this.majorElectiveService.findMajorElective()
    }

    @Get('key')
    async getPlaceKey(@Body() findPlace: findKeyDTO){
        return await this.majorElectiveService.findMajorElectiveByKey(findPlace.key)
    }

    @Post()
    createPlace(@Body() createPlace: majorElectiveDTO){
        this.majorElectiveService.createMajorElective(createPlace)
    }

    // @Get('room')
    // findPlaceByName(@Body() findPlace: findPlaceDTO){
    //     return this.placeService.findPlaceByName(findPlace.room)
    // }

    @Put(':course_code')
    editPlace(@Param('course_code') course_code: string, @Body() updatePlace: majorElectiveDTO){
        this.majorElectiveService.updateMajorElective(course_code, updatePlace)
    }

    @Delete(':course_code')
    deletePlaceByID(@Param('course_code') course_code: string){
        this.majorElectiveService.deleteMajorElective(course_code)
    }

    @Get(':course_code')
    async findPlaceByID(@Param('course_code') course_code: string){
        return await this.majorElectiveService.findMajorElectiveByName(course_code)
    }
}
