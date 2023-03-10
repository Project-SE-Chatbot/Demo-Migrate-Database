import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major_Elective_Key } from 'src/typeorm/entities/back_end/Major_Elective_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorElectiveKeyService {
  constructor(
    @InjectRepository(Major_Elective_Key)
    private majorElecKeyRepository: Repository<Major_Elective_Key>,
  ) {}

  findMajorElecKey() {
    return this.majorElecKeyRepository.find();
  }

  async findMajorElecKeyByCode(key: string) {
    return await this.majorElecKeyRepository.findOne({ where: { key_1: key } });
  }

  createMajorEleKey(majorElecKeyDetail: keyType) {
    const newDegreeKey = this.majorElecKeyRepository.create(majorElecKeyDetail);
    return this.majorElecKeyRepository.save(newDegreeKey);
  }

  updateMajorEleKey(
    key_1: string,
    updateMajorElecKey: keyType,
  ) {
    return this.majorElecKeyRepository.update(
      { key_1 },
      { ...updateMajorElecKey },
    );
  }

  deleteMajorEleKey(key_1: string) {
    return this.majorElecKeyRepository.delete({ key_1 });
  }

  deleteMajorEleAllKey() {
    return this.majorElecKeyRepository.clear();
  }
}
