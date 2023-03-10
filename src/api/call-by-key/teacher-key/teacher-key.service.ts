import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Teacher_Key } from 'src/typeorm/entities/back_end/Teacher_Key';
import { findKeyType, keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherKeyService {
  constructor(
    @InjectRepository(Teacher_Key)
    private teacherKeyRepository: Repository<Teacher_Key>,
  ) {}

  async findTeacherKey() {
    return this.teacherKeyRepository.find();
  }

  async findTeacherKeyByCode(key: string) {
    return await this.teacherKeyRepository.findOne({where: {key_1: key}});
  }

  createTeacherKey(teacherKeyDetail: keyType) {
    const newTeacherKey = this.teacherKeyRepository.create(teacherKeyDetail);
    return this.teacherKeyRepository.save(newTeacherKey);
  }

  updateTeacherKey(key_1: string, updateTeacherKey: keyType) {
    return this.teacherKeyRepository.update(
      { key_1 },
      { ...updateTeacherKey },
    );
  }

  deleteTeacherKey(key_1: string) {
    return this.teacherKeyRepository.delete({ key_1 });
  }

  deleteTeacherAllKey() {
    return this.teacherKeyRepository.clear();
  }
}
