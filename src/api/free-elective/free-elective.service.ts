import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { ElectiveParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class FreeElectiveService {

    constructor(
        @InjectRepository(Free_Elective) private free_electiveRepository: Repository<Free_Elective>
    ){}

    findElective(){
        return this.free_electiveRepository.find()
    }

    createElective(electiveDetail: ElectiveParam){
        const newElective = this.free_electiveRepository.create(electiveDetail)
        return this.free_electiveRepository.save(newElective)
    }
}
