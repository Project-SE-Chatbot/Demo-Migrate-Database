import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major_Key } from 'src/typeorm/entities/back_end/Major_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorKeyService {
  constructor(
    @InjectRepository(Major_Key)
    private majorKeyRepository: Repository<Major_Key>,
  ) {}

  findMajorKey() {
    return this.majorKeyRepository.find();
  }

  async findMajorKeyByCode(code_course: string) {
    return await this.majorKeyRepository.findOne({where: {key_1: code_course}});
  }

  createMajorKey(majorKeyDetail: keyType) {
    const newMajorKey = this.majorKeyRepository.create(majorKeyDetail);
    return this.majorKeyRepository.save(newMajorKey);
  }

  updateMajorKey(key_1: string, updateMajorKey: keyType) {
    return this.majorKeyRepository.update(
      { key_1 },
      { ...updateMajorKey },
    );
  }

  deleteMajorKey(key_1: string) {
    return this.majorKeyRepository.delete({ key_1 });
  }

  deleteMajorAllKey() {
    return this.majorKeyRepository.clear();
  }
}
