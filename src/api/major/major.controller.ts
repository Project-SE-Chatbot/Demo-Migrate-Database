import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { Free_ElectiveDTO } from '../free-elective/DTO/elective.dto';
import { PlaceDTO } from '../place/DTO/place.dto';
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

    @Put(':id')
    editMajor(@Param('id', ParseIntPipe) id: number, @Body() updateMajor: updateMajorDTO ){
        this.majorService.updateMajor(id, updateMajor)
    }

    @Delete(':id')
    deleteMajorByID(@Param('id', ParseIntPipe) id: number){
        this.majorService.deleteMajor(id)
    }

    @Get(':id')
    findMajorByID(@Param('id', ParseIntPipe) id: number){
        this.majorService.findMajorByID(id)
    }

    @Get(':code')
    findMajorByCode(@Param('id') id: string){
        this.majorService.findMajorByCode(id)
    }

    @Get('place')
    findMajorByName(@Body() findName: findNameDTO){
        this.majorService.findMajorByName(findName.name)
    }
}
