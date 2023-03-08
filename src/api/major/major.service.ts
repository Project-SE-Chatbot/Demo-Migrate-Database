import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Major_Key } from 'src/typeorm/entities/back_end/Major_Key';
import { createTeacher, ElectiveParam, MajorParam, PlaceParam, TeacherParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major) private majorRepository: Repository<Major>,
    @InjectRepository(Major_Key) private majorKeyRepository: Repository<Major_Key>,
  ) {}

  findMajor() {
    return this.majorRepository.find({relations: ['place', 'teacher']});
  }

  async findMajorByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.majorKeyRepository.find({where: {key_1: findKey}})
    const findKey2 = await this.majorKeyRepository.find({where: {key_2: findKey}})
    const findKey3 = await this.majorKeyRepository.find({where: {key_3: findKey}})
    const findKey4 = await this.majorKeyRepository.find({where: {key_4: findKey}})
    const findKey5 = await this.majorKeyRepository.find({where: {key_5: findKey}})
    const findKey6 = await this.majorKeyRepository.find({where: {key_6: findKey}})

    if(findKey1.length != 0){
      return await this.findMajorByCode(findKey1[0].key_1)
      
    }else if(findKey2.length != 0){
      return await this.findMajorByCode(findKey2[0].key_1)
      
    }else if(findKey3.length != 0){
      console.log(findKey3);
      
      return await this.findMajorByCode(findKey3[0].key_1)
      
    }else if(findKey4.length != 0){
      return await this.findMajorByCode(findKey4[0].key_1)
      
    }else if(findKey5.length != 0){
      return await this.findMajorByCode(findKey5[0].key_1)
      
    }else if(findKey6.length != 0){
      return await this.findMajorByCode(findKey6[0].key_1)
      
    }

  }

  findMajorByName(name: string){
    return this.majorRepository.find({ where: {name: name} })
  }

  createMajor(majorDetail: MajorParam) {
    const newMajor = this.majorRepository.create(majorDetail);
    return this.majorRepository.save(newMajor);
  }

  updateMajor(id_major: number, updateMajor: MajorParam) {
    return this.majorRepository.update({ id_major }, { ...updateMajor });
  }

  deleteMajorID(id_major: number) {
    return this.majorRepository.delete({ id_major });
  }

  deleteMajor() {
    return this.majorRepository.clear();
  }

  findMajorByID(id_major: number) {
    return this.majorRepository.findOne({ where: {id_major }, relations: ['place', 'review', 'teacher'] });
  }

  findMajorByCode(id: string) {
    return this.majorRepository.findOne({ where: { course_code: id } });
  }

}
