import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { TeacherParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  findTeacher() {
    return this.teacherRepository.find();
  }

  createTeacher(teacherDetail: TeacherParam) {
    const newTeacher = this.teacherRepository.create(teacherDetail);
    return this.teacherRepository.save(newTeacher);
  }

  updateTeacher(id_teacher: number, updateTeacher: TeacherParam) {
    return this.teacherRepository.update(
      { id_teacher },
      { ...updateTeacher },
    );
  }

  deleteTeacher(id_teacher: number) {
    return this.teacherRepository.delete({ id_teacher });
  }

  findTeacherByID(id_teacher: number) {
    return this.teacherRepository.findOne({ where: { id_teacher } });
  }
}
