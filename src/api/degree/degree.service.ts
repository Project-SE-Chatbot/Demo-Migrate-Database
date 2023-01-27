import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { DegreeParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class DegreeService {

    constructor(
        @InjectRepository(Degree) private degreeRepository: Repository<Degree>
    ){}

    findDegree(){
        return this.degreeRepository.find()
    }

    createDegree(degreeDetail: DegreeParam){
        const newDegree = this.degreeRepository.create(degreeDetail)
        return this.degreeRepository.save(newDegree)
    }
}
