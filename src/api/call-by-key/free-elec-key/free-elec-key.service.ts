import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Free_Elective_Key } from 'src/typeorm/entities/back_end/Free_Elective_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class FreeElecKeyService {

    constructor(
    @InjectRepository(Free_Elective_Key)
    private freeELecKeyRepository: Repository<Free_Elective_Key>,
  ) {}

  findFreeElecKey() {
    return this.freeELecKeyRepository.find();
  }

  async findFreeElecKeyByCode(key: string) {
    return await this.freeELecKeyRepository.findOne({where: {key_1: key}});
  }

  createFreeElecKey(freeElecKeyDetail: keyType) {
    const newFreeElecKey = this.freeELecKeyRepository.create(freeElecKeyDetail);
    return this.freeELecKeyRepository.save(newFreeElecKey);
  }

  updateFreeElecKey(key_1: string, updateFreeElecKey: keyType) {
    return this.freeELecKeyRepository.update(
      { key_1 },
      { ...updateFreeElecKey },
    );
  }

  deleteFreeElecKey(key_1: string) {
    return this.freeELecKeyRepository.delete({ key_1 });
  }

  deleteFreeElecAllKey() {
    return this.freeELecKeyRepository.clear();
  }
}
