import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from 'src/typeorm/entities/back_end/Register';
import { RegisterParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private registerRepository: Repository<Register>,
  ) {}

  findRegister() {
    return this.registerRepository.find();
  }

  createReg(regDetail: RegisterParam) {
    const newReg = this.registerRepository.create(regDetail);
    return this.registerRepository.save(newReg);
  }

  updateRegister(id_register: number, updateRegister: RegisterParam) {
    return this.registerRepository.update({ id_register }, { ...updateRegister });
  }

  deleteRegister(id_register: number) {
    return this.registerRepository.delete({ id_register });
  }

  findRegisterByID(id_register: number) {
    return this.registerRepository.findOne({ where: { id_register } });
  }
}
