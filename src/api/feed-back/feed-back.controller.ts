import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { FeedbackDTO } from './DTO/feedback.dto';
import { updateFeedbackDTO } from './DTO/updateFeedback.dto';
import { FeedBackService } from './feed-back.service';

@Controller('feed-back')
export class FeedBackController {
    constructor(private feedbackService: FeedBackService){}

    @Get()
    async getFeedBack(){
        return await this.feedbackService.findFeedback()
    }

    @Post()
    createFeedBack(@Body() createFeedback: FeedbackDTO){
        this.feedbackService.createFeedback(createFeedback)
    }

    @Put(':id')
    editFeedBack(@Param('id', ParseIntPipe) id: number, @Body() updateFeedback: updateFeedbackDTO ){
        this.feedbackService.updateFeedback(id, updateFeedback)
    }

    @Delete(':id')
    deleteFeedBackByID(@Param('id', ParseIntPipe) id: number){
        this.feedbackService.deleteFeedback(id)
    }

    @Get(':id')
    async findFeedbackByID(@Param('id', ParseIntPipe) id: number){
        return await this.feedbackService.findFeedbackByID(id)
    }
}
