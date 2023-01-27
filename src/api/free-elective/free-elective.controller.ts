import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Free_ElectiveDTO } from './DTO/elective.dto';
import { FreeElectiveService } from './free-elective.service';

@Controller('free-elective')
export class FreeElectiveController {
    constructor(private electiveService: FreeElectiveService){}

    @Get()
    async getElective(){
        return await this.electiveService.findElective()
    }

    @Post()
    createElective(@Body() createElective: Free_ElectiveDTO){
        this.electiveService.createElective(createElective)
    }

    @Put()
    editElective(){

    }

    @Delete()
    deleteElectiveByID(){
        
    }
}
