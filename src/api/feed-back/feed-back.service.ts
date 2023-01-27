import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm/entities/back_end/Feed Back';
import { Repository } from 'typeorm';
import { FeedbackDTO } from './DTO/feedback.dto';

@Injectable()
export class FeedBackService {

    constructor(
        @InjectRepository(Feedback) private feedbackRepository: Repository<Feedback>
    ){}

    findFeedback(){
        return this.feedbackRepository.find()
    }

    createFeedback(feedbackDetail: FeedbackDTO){
        const newFeedback = this.feedbackRepository.create(feedbackDetail)
        return this.feedbackRepository.save(newFeedback)
    }
}
