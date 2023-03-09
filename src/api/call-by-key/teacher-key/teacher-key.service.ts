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

  createTeacherKey(teacherKeyDetail: keyType) {
    const newTeacherKey = this.teacherKeyRepository.create(teacherKeyDetail);
    return this.teacherKeyRepository.save(newTeacherKey);
  }

  updateTeacherKey(id_teacher_key: number, updateTeacherKey: keyType) {
    return this.teacherKeyRepository.update(
      { id_teacher_key },
      { ...updateTeacherKey },
    );
  }

  deleteTeacherKey(id_teacher_key: number) {
    return this.teacherKeyRepository.delete({ id_teacher_key });
  }

  deleteTeacherAllKey() {
    return this.teacherKeyRepository.clear();
  }
}
