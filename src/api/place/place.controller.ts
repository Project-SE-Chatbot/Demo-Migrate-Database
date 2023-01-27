import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { PlaceDTO } from './DTO/place.dto';
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

    @Put()
    editPlace(){

    }

    @Delete()
    deletePlaceByID(){
        
    }
}
