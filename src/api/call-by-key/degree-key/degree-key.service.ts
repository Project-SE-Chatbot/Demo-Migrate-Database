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

  async findDegreeKeyByCode(key: string) {
    return await this.degreeKeyRepository.findOne({where: {key_1: key}});
  }

  createDegreeKey(degreeKeyDetail: keyType) {
    const newDegreeKey = this.degreeKeyRepository.create(degreeKeyDetail);
    return this.degreeKeyRepository.save(newDegreeKey);
  }

  updateDegreeKey(key_1: string, updateDegreeKey: keyType) {
    return this.degreeKeyRepository.update(
      { key_1 },
      { ...updateDegreeKey },
    );
  }

  deleteDegreeKey(key_1: string) {
    return this.degreeKeyRepository.delete({ key_1 });
  }

  deleteDegreeAllKey() {
    return this.degreeKeyRepository.clear();
  }
}
