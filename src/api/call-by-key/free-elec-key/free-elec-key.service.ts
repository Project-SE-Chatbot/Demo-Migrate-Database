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

  createFreeElecKey(freeElecKeyDetail: keyType) {
    const newFreeElecKey = this.freeELecKeyRepository.create(freeElecKeyDetail);
    return this.freeELecKeyRepository.save(newFreeElecKey);
  }

  updateFreeElecKey(id_free_elective_key: number, updateFreeElecKey: keyType) {
    return this.freeELecKeyRepository.update(
      { id_free_elective_key },
      { ...updateFreeElecKey },
    );
  }

  deleteFreeElecKey(id_free_elective_key: number) {
    return this.freeELecKeyRepository.delete({ id_free_elective_key });
  }

  deleteFreeElecAllKey() {
    return this.freeELecKeyRepository.clear();
  }
}
