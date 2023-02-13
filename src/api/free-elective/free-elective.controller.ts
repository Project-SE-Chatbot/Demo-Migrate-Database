import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { Free_ElectiveDTO } from './DTO/elective.dto';
import { updateFree_ElectiveDTO } from './DTO/updateElective.dto';
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

    @Put(':id')
    editElective(@Param('id', ParseIntPipe) id: number, @Body() updateElective: updateFree_ElectiveDTO ){
        this.electiveService.updateElective(id, updateElective)
    }

    @Delete(':id')
    deleteElectiveByID(@Param('id', ParseIntPipe) id: number){
        this.electiveService.deleteElective(id)
    }

    @Get(':id')
    async findElectiveByID(@Param('id', ParseIntPipe) id: number){
        return await this.electiveService.findElectiveByID(id)
    }
}
