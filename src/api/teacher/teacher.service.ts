import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Teacher_Key } from 'src/typeorm/entities/back_end/Teacher_Key';
import { TeacherParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Teacher_Key)
    private teacherKeyRepository: Repository<Teacher_Key>,
  ) {}

  findTeacher() {
    return this.teacherRepository.find();
  }

  async findTeacherByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.teacherKeyRepository.find({where: {key_1: findKey}})
    const findKey2 = await this.teacherKeyRepository.find({where: {key_2: findKey}})
    const findKey3 = await this.teacherKeyRepository.find({where: {key_3: findKey}})
    const findKey4 = await this.teacherKeyRepository.find({where: {key_4: findKey}})
    const findKey5 = await this.teacherKeyRepository.find({where: {key_5: findKey}})
    const findKey6 = await this.teacherKeyRepository.find({where: {key_6: findKey}})

    if(findKey1.length != 0){
      if(findKey1[0].key_1 == 'อาจารย์ทั้งหมด'){
        return await this.findTeacher()
      }
      return await this.findTeacherByName(findKey1[0].key_1)
      
    }else if(findKey2.length != 0){
      if(findKey2[0].key_1 == 'อาจารย์ทั้งหมด'){
        return await this.findTeacher()
      }
      return await this.findTeacherByName(findKey2[0].key_1)
      
    }else if(findKey3.length != 0){
      if(findKey3[0].key_1 == 'อาจารย์ทั้งหมด'){
        return await this.findTeacher()
      }
      return await this.findTeacherByName(findKey3[0].key_1)
      
    }else if(findKey4.length != 0){
      if(findKey4[0].key_1 == 'อาจารย์ทั้งหมด'){
        return await this.findTeacher()
      }
      return await this.findTeacherByName(findKey4[0].key_1)
      
    }else if(findKey5.length != 0){
      if(findKey5[0].key_1 == 'อาจารย์ทั้งหมด'){
        return await this.findTeacher()
      }
      return await this.findTeacherByName(findKey5[0].key_1)
      
    }else if(findKey6.length != 0){
      if(findKey6[0].key_1 == 'อาจารย์ทั้งหมด'){
        return await this.findTeacher()
      }
      return await this.findTeacherByName(findKey6[0].key_1)
      
    }

  }

  createTeacher(teacherDetail: TeacherParam) {
    const newTeacher = this.teacherRepository.create(teacherDetail);
    return this.teacherRepository.save(newTeacher);
  }

  updateTeacher(name: string, updateTeacher: TeacherParam) {
    return this.teacherRepository.update(
      { name },
      { ...updateTeacher },
    );
  }

  deleteTeacher(name: string) {
    return this.teacherRepository.delete({ name });
  }

  findTeacherByID(id_teacher: number) {
    return this.teacherRepository.findOne({ where: { id_teacher } });
  }

  findTeacherByName(name: string){
    return this.teacherRepository.findOne({where: {name: name}})
  }
}
