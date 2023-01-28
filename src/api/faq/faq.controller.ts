import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { FaqDTO } from './DTO/faq.dto';
import { updateFaqDTO } from './DTO/updateFAQ.dto';
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

    @Put(':id')
    editFAQ(@Param('id', ParseIntPipe) id: number, @Body() updateFAQ: updateFaqDTO){
        this.faqService.updateFAQ(id, updateFAQ)
    }

    @Delete(':id')
    deleteFAQByID(@Param('id', ParseIntPipe) id: number){
        this.faqService.deleteFAQ(id)
    }

    @Get(':id')
    findFAQByID(@Param('id', ParseIntPipe) id: number){
        this.faqService.findFAQByID(id)
    }
}
