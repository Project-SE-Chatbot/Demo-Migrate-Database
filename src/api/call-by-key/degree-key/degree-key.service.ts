import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Degree_Key } from 'src/typeorm/entities/back_end/Degree_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class DegreeKeyService {
  constructor(
    @InjectRepository(Degree_Key)
    private degreeKeyRepository: Repository<Degree_Key>,
  ) {}

  findDegreeKey() {
    return this.degreeKeyRepository.find();
  }

  createDegreeKey(degreeKeyDetail: keyType) {
    const newDegreeKey = this.degreeKeyRepository.create(degreeKeyDetail);
    return this.degreeKeyRepository.save(newDegreeKey);
  }

  updateDegreeKey(id_degree_key: number, updateDegreeKey: keyType) {
    return this.degreeKeyRepository.update(
      { id_degree_key },
      { ...updateDegreeKey },
    );
  }

  deleteDegreeKey(id_degree_key: number) {
    return this.degreeKeyRepository.delete({ id_degree_key });
  }

  deleteDegreeAllKey() {
    return this.degreeKeyRepository.clear();
  }
}
