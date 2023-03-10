import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Register_Key } from 'src/typeorm/entities/back_end/Register_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterKeyService {
  constructor(
    @InjectRepository(Register_Key)
    private registerKeyRepository: Repository<Register_Key>,
  ) {}

  findRegisterKey() {
    return this.registerKeyRepository.find();
  }

  async findRegisterKeyByCode(key: string) {
    return await this.registerKeyRepository.findOne({ where: { key_1: key } });
  }

  createRegisterKey(registerKeyDetail: keyType) {
    const newRegisterKey = this.registerKeyRepository.create(registerKeyDetail);
    return this.registerKeyRepository.save(newRegisterKey);
  }

  updateRegisterKey(key_1: string, updateRegisterKey: keyType) {
    return this.registerKeyRepository.update(
      { key_1 },
      { ...updateRegisterKey },
    );
  }

  deleteRegisterKey(key_1: string) {
    return this.registerKeyRepository.delete({ key_1 });
  }

  deleteRegisterAllKey() {
    return this.registerKeyRepository.clear();
  }
}
