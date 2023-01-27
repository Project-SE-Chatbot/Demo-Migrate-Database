import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Post, Put } from '@nestjs/common/decorators';
import { FaqDTO } from './DTO/faq.dto';
import { FaqService } from './faq.service';

@Controller('faq')
export class FaqController {
    constructor(private faqService: FaqService){}
    @Get()
    async getFAQ(){
        return await this.faqService.findFAQ()
    }

    @Post()
    createFAQ(@Body() createFaq: FaqDTO){
        this.faqService.createFAQ(createFaq)
    }

    @Put()
    editFAQ(){

    }

    @Delete()
    deleteFAQByID(){
        
    }
}
