import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major_Elective_Key } from 'src/typeorm/entities/back_end/Major_Elective_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorElectiveService {

    constructor(
        @InjectRepository(Major_Elective_Key)
        private majorElecKeyRepository: Repository<Major_Elective_Key>,
      ) {}
    
      findMajorElecKey() {
        return this.majorElecKeyRepository.find();
      }
    
      createMajorEleKey(majorElecKeyDetail: keyType) {
        const newDegreeKey = this.majorElecKeyRepository.create(majorElecKeyDetail);
        return this.majorElecKeyRepository.save(newDegreeKey);
      }
    
      updateMajorEleKey(id_major_elective_key: number, updateMajorElecKey: keyType) {
        return this.majorElecKeyRepository.update(
          { id_major_elective_key },
          { ...updateMajorElecKey },
        );
      }
    
      deleteMajorEleKey(id_major_elective_key: number) {
        return this.majorElecKeyRepository.delete({ id_major_elective_key });
      }
    
      deleteMajorEleAllKey() {
        return this.majorElecKeyRepository.clear();
      }
}
