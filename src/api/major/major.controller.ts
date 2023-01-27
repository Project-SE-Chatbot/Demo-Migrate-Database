import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { MajorDTO } from './DTO/major.dto';
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

    @Put()
    editMajor(){

    }

    @Delete()
    deleteMajorByID(){
        
    }
}
