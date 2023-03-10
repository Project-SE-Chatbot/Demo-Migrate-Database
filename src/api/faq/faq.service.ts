import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faq } from 'src/typeorm/entities/back_end/FAQ';
import { FaqParam } from 'src/ultils/types';
import { Repository } from 'typeorm';
import { FaqDTO } from './DTO/faq.dto';

@Injectable()
export class FaqService {

    constructor(
        @InjectRepository(Faq) private faqRepository: Repository<Faq>
    ){}

    findFAQ(){
        return this.faqRepository.find()
    }

    createFAQ(FAQDetail: FaqDTO){
        const newFAQ = this.faqRepository.create(FAQDetail)
        return this.faqRepository.save(newFAQ)
    }

    updateFAQ(id_faq: number, updateFAQ: FaqParam){
        return this.faqRepository.update({id_faq}, {...updateFAQ})
    }

    deleteFAQ(id_faq: number){
        return this.faqRepository.delete({id_faq})
    }

    findFAQByID(id_faq: number){
        return this.faqRepository.findOne({where:{id_faq}})
    }
}
