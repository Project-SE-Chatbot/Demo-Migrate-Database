import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Q_And_A_DTO } from './DTO/qa.dto';
import { updateQ_And_A_DTO } from './DTO/updateQA.dto';
import { QaService } from './qa.service';

@Controller('qa')
export class QaController {
    constructor(private QAService: QaService){}

    @Get()
    async getQA(){
        return await this.QAService.findQA()
    }

    @Post()
    createQA(@Body() createQA: Q_And_A_DTO){
        this.QAService.createQA(createQA)
    }

    @Put(':id')
    editQA(@Param('id', ParseIntPipe) id: number, @Body() updateQA: updateQ_And_A_DTO){
        this.QAService.updateQA(id, updateQA)
    }

    @Delete(':id')
    deleteQAByID(@Param('id', ParseIntPipe) id: number){
        this.QAService.deleteQA(id)
    }

    @Get(':id')
    findQAByID(@Param('id', ParseIntPipe) id: number){
        this.QAService.findQAByID(id)
    }
}
