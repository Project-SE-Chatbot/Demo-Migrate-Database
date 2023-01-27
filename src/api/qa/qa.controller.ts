import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Q_And_A_DTO } from './DTO/qa.dto';
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

    @Put()
    editQA(){

    }

    @Delete()
    deleteQAByID(){
        
    }
}
