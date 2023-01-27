import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Post, Put } from '@nestjs/common/decorators';
import { FeedbackDTO } from './DTO/feedback.dto';
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

    @Put()
    editFeedBack(){

    }

    @Delete()
    deleteFeedBackByID(){
        
    }
}
