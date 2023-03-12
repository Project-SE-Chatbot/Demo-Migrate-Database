import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Free_Elective_Key } from 'src/typeorm/entities/back_end/Free_Elective_Key';
import { Free_Elective_New } from 'src/typeorm/entities/back_end/Free_Elective_New';
import { ElectiveParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class FreeElectiveService {

  constructor(
    @InjectRepository(Free_Elective_New)
    private free_electiveRepository: Repository<Free_Elective_New>,
    @InjectRepository(Free_Elective_Key)
    private free_electiveKeyRepository: Repository<Free_Elective_Key>,
  ) {}

  findElective() {
    return this.free_electiveRepository.find();
  }

  async findElectiveByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.free_electiveKeyRepository.find({where: {key_1: findKey}})
    const findKey2 = await this.free_electiveKeyRepository.find({where: {key_2: findKey}})
    const findKey3 = await this.free_electiveKeyRepository.find({where: {key_3: findKey}})
    const findKey4 = await this.free_electiveKeyRepository.find({where: {key_4: findKey}})
    const findKey5 = await this.free_electiveKeyRepository.find({where: {key_5: findKey}})
    const findKey6 = await this.free_electiveKeyRepository.find({where: {key_6: findKey}})

    if(findKey1.length != 0){
      if(findKey1[0].key_1 == 'ตัวฟรี' || findKey1[0].key_1 == 'ลงตัวฟรี'){
        return await this.findElective()
      }
      return await this.findElectiveByCourseCode(parseInt(findKey1[0].key_1))
      
    }else if(findKey2.length != 0){
      if(findKey2[0].key_1 == 'ตัวฟรี' || findKey2[0].key_1 == 'ลงตัวฟรี'){
        return await this.findElective()
      }
      return await this.findElectiveByCourseCode(parseInt(findKey2[0].key_1))
      
    }else if(findKey3.length != 0){
      if(findKey3[0].key_1 == 'ตัวฟรี' || findKey3[0].key_1 == 'ลงตัวฟรี'){
        return await this.findElective()
      }
      return await this.findElectiveByCourseCode(parseInt(findKey3[0].key_1))
      
    }else if(findKey4.length != 0){
      if(findKey4[0].key_1 == 'ตัวฟรี' || findKey4[0].key_1 == 'ลงตัวฟรี'){
        return await this.findElective()
      }
      return await this.findElectiveByCourseCode(parseInt(findKey4[0].key_1))
      
    }else if(findKey5.length != 0){1
      if(findKey5[0].key_1 == 'ตัวฟรี' || findKey5[0].key_1 == 'ลงตัวฟรี'){
        return await this.findElective()
      }
      return await this.findElectiveByCourseCode(parseInt(findKey5[0].key_1))
      
    }else if(findKey6.length != 0){
      if(findKey6[0].key_1 == 'ตัวฟรี' || findKey6[0].key_1 == 'ลงตัวฟรี'){
        return await this.findElective()
      }
      return await this.findElectiveByCourseCode(parseInt(findKey6[0].key_1))
      
    }

  }

  createElective(electiveDetail: ElectiveParam) {
    const newElective = this.free_electiveRepository.create(electiveDetail);
    return this.free_electiveRepository.save(newElective);
  }

  updateElective(course_code: number, updateElective: ElectiveParam) {
    return this.free_electiveRepository.update(
      { course_code },
      { ...updateElective },
    );
  }

  deleteElective(course_code: number) {
    return this.free_electiveRepository.delete({ course_code });
  }

  findElectiveByCourseCode(course_code: number) {
    console.log(course_code);
    
    return this.free_electiveRepository.findOne({ where: { course_code } });
  }
}
