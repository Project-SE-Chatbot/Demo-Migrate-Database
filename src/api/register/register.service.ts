import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Register } from 'src/typeorm/entities/back_end/Register';
import { Register_Key } from 'src/typeorm/entities/back_end/Register_Key';
import { DegreeParam, RegisterParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private registerRepository: Repository<Register>,
    @InjectRepository(Register_Key)
    private registerKeyRepository: Repository<Register_Key>,
  ) {}

  findRegister() {
    return this.registerRepository.find();
  }

  async findRegisterByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.registerKeyRepository.find({where: {key_1: findKey}})
    const findKey2 = await this.registerKeyRepository.find({where: {key_2: findKey}})
    const findKey3 = await this.registerKeyRepository.find({where: {key_3: findKey}})
    const findKey4 = await this.registerKeyRepository.find({where: {key_4: findKey}})
    const findKey5 = await this.registerKeyRepository.find({where: {key_5: findKey}})
    const findKey6 = await this.registerKeyRepository.find({where: {key_6: findKey}})

    if(findKey1.length != 0){
      if(findKey1[0].key_1 == 'วิศวะคอม TCAS66'){
        return await this.findRegister()
      }
      return await this.findRegisterByName(findKey1[0].key_1)
      
    }else if(findKey2.length != 0){
      if(findKey2[0].key_1 == 'วิศวะคอม TCAS66'){
        return await this.findRegister()
      }
      return await this.findRegisterByName(findKey2[0].key_1)
      
    }else if(findKey3.length != 0){
      if(findKey3[0].key_1 == 'วิศวะคอม TCAS66'){
        return await this.findRegister()
      }
      return await this.findRegisterByName(findKey3[0].key_1)
      
    }else if(findKey4.length != 0){
      if(findKey4[0].key_1 == 'วิศวะคอม TCAS66'){
        return await this.findRegister()
      }
      return await this.findRegisterByName(findKey4[0].key_1)
      
    }else if(findKey5.length != 0){
      if(findKey5[0].key_1 == 'วิศวะคอม TCAS66'){
        return await this.findRegister()
      }
      return await this.findRegisterByName(findKey5[0].key_1)
      
    }else if(findKey6.length != 0){
      if(findKey6[0].key_1 == 'วิศวะคอม TCAS66'){
        return await this.findRegister()
      }
      return await this.findRegisterByName(findKey6[0].key_1)
      
    }

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

  findRegisterByName(name: string) {
    return this.registerRepository.findOne({ where: { name } });
  }
}
