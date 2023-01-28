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

    updateMajor(id_major: number, updateMajor: MajorParam) {
        return this.majorRepository.update(
          { id_major },
          { ...updateMajor },
        );
      }
    
      deleteMajor(id_major: number) {
        return this.majorRepository.delete({ id_major });
      }
    
      findMajorByID(id_major: number) {
        return this.majorRepository.findOne({ where: { id_major } });
      }
}
