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

    @Put(':id')
    editPlace(@Param('id', ParseIntPipe) id: number, @Body() updatePlace: majorElectiveDTO){
        this.majorElectiveService.updateMajorElective(id, updatePlace)
    }

    @Delete(':id')
    deletePlaceByID(@Param('id', ParseIntPipe) id: number){
        this.majorElectiveService.deleteMajorElective(id)
    }

    // @Get(':id')
    // async findPlaceByID(@Param('id', ParseIntPipe) id: number){
    //     return await this.majorElectiveService.find(id)
    // }
}
