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

  createRegisterKey(registerKeyDetail: keyType) {
    const newRegisterKey = this.registerKeyRepository.create(registerKeyDetail);
    return this.registerKeyRepository.save(newRegisterKey);
  }

  updateRegisterKey(id_register_key: number, updateRegisterKey: keyType) {
    return this.registerKeyRepository.update(
      { id_register_key },
      { ...updateRegisterKey },
    );
  }

  deleteRegisterKey(id_register_key: number) {
    return this.registerKeyRepository.delete({ id_register_key });
  }

  deleteRegisterAllKey() {
    return this.registerKeyRepository.clear();
  }
}
