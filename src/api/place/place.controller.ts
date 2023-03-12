import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { findKeyDTO } from '../dto_global/findKey.dto';
import { findPlaceDTO } from './DTO/findPlaceName.dio';
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

    @Get('key')
    async getPlaceKey(@Body() findPlace: findKeyDTO){
        return await this.placeService.findPlaceByKey(findPlace.key)
    }

    @Post()
    createPlace(@Body() createPlace: PlaceDTO){
        this.placeService.createPlace(createPlace)
    }

    // @Get('room')
    // findPlaceByName(@Body() findPlace: findPlaceDTO){
    //     return this.placeService.findPlaceByName(findPlace.room)
    // }

    @Put(':id')
    editPlace(@Param('id', ParseIntPipe) id: number, @Body() updatePlace: updatePlaceDTO){
        this.placeService.updatePlace(id, updatePlace)
    }

    @Delete(':id')
    deletePlaceByID(@Param('id', ParseIntPipe) id: number){
        this.placeService.deletePlace(id)
    }

    @Get(':room')
    async findPlaceByID(@Param('room') room: string){
        return await this.placeService.findPlaceByRoom(room)
    }

}
