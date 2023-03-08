import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Register } from 'src/typeorm/entities/back_end/Register';
import { DegreeParam, RegisterParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private registerRepository: Repository<Register>,
    @InjectRepository(Degree)
    private degreeRepository: Repository<Degree>,
  ) {}

  findRegister() {
    return this.registerRepository.find({relations: ['info']});
  }

  async createReg(regDetail: RegisterParam) {
    const register = await this.registerRepository.findOneBy({ degree: regDetail.degree });
    if(register) 
      return new HttpException("Have this degree", HttpStatus.BAD_REQUEST)
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
