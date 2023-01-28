import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { PlaceDTO } from './DTO/place.dto';
import { updatePlaceDTO } from './DTO/updatePlace.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
    constructor(private placeService: PlaceService){}
    
    @Get()
    async getPlace(){
        return await this.placeService.findPlace()
    }

    @Post()
    createPlace(@Body() createPlace: PlaceDTO){
        this.placeService.createPlace(createPlace)
    }

    @Put(':id')
    editPlace(@Param('id', ParseIntPipe) id: number, @Body() updatePlace: updatePlaceDTO){
        this.placeService.updatePlace(id, updatePlace)
    }

    @Delete(':id')
    deletePlaceByID(@Param('id', ParseIntPipe) id: number){
        this.placeService.deletePlace(id)
    }

    @Get(':id')
    findPlaceByID(@Param('id', ParseIntPipe) id: number){
        this.placeService.findPlaceByID(id)
    }
}
