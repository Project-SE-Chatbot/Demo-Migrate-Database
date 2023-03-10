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

  findMajorKeyByCode(code_course: string) {
    return this.majorKeyRepository.findOne({where: {key_1: code_course}});
  }

  createMajorKey(majorKeyDetail: keyType) {
    const newMajorKey = this.majorKeyRepository.create(majorKeyDetail);
    return this.majorKeyRepository.save(newMajorKey);
  }

  updateMajorKey(id_major_key: number, updateMajorKey: keyType) {
    return this.majorKeyRepository.update(
      { id_major_key },
      { ...updateMajorKey },
    );
  }

  deleteMajorKey(id_major_key: number) {
    return this.majorKeyRepository.delete({ id_major_key });
  }

  deleteMajorAllKey() {
    return this.majorKeyRepository.clear();
  }
}
