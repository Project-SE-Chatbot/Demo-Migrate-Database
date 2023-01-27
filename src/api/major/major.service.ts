import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { MajorParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {

    constructor(
        @InjectRepository(Major) private majorRepository: Repository<Major>
    ){}

    findMajor(){
        return this.majorRepository.find()
    }

    createMajor(majorDetail: MajorParam){
        const newMajor = this.majorRepository.create(majorDetail)
        return this.majorRepository.save(newMajor)
    }
}
