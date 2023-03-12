import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Major_Key } from 'src/typeorm/entities/back_end/Major_Key';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Place_Key } from 'src/typeorm/entities/back_end/Place_Key';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Teacher_Key } from 'src/typeorm/entities/back_end/Teacher_Key';
import {
  createTeacher,
  ElectiveParam,
  MajorParam,
  PlaceParam,
  TeacherAndPlaceForMajorParam,
  TeacherParam,
} from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major) private majorRepository: Repository<Major>,
    @InjectRepository(Major_Key)
    private majorKeyRepository: Repository<Major_Key>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Teacher_Key)
    private teacherKeyRepository: Repository<Teacher_Key>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    @InjectRepository(Place_Key)
    private placeKeyRepository: Repository<Place_Key>,
  ) {}

  findMajor() {
    return this.majorRepository.find({ relations: ['place', 'teacher'] });
  }

  async findMajorByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.majorKeyRepository.find({
      where: { key_1: findKey },
    });
    const findKey2 = await this.majorKeyRepository.find({
      where: { key_2: findKey },
    });
    const findKey3 = await this.majorKeyRepository.find({
      where: { key_3: findKey },
    });
    const findKey4 = await this.majorKeyRepository.find({
      where: { key_4: findKey },
    });
    const findKey5 = await this.majorKeyRepository.find({
      where: { key_5: findKey },
    });
    const findKey6 = await this.majorKeyRepository.find({
      where: { key_6: findKey },
    });

    if (findKey1.length != 0) {
      return await this.findMajorByCode(findKey1[0].key_1);
    } else if (findKey2.length != 0) {
      return await this.findMajorByCode(findKey2[0].key_1);
    } else if (findKey3.length != 0) {
      console.log(findKey3);

      return await this.findMajorByCode(findKey3[0].key_1);
    } else if (findKey4.length != 0) {
      return await this.findMajorByCode(findKey4[0].key_1);
    } else if (findKey5.length != 0) {
      return await this.findMajorByCode(findKey5[0].key_1);
    } else if (findKey6.length != 0) {
      return await this.findMajorByCode(findKey6[0].key_1);
    }
  }

  findMajorByName(name: string) {
    return this.majorRepository.find({ where: { name: name } });
  }

  createMajor(majorDetail: MajorParam) {
    const newMajor = this.majorRepository.create(majorDetail);
    return this.majorRepository.save(newMajor);
  }

  async updateMajor(course_code: string, updateMajor: MajorParam) {
    const major = await this.majorRepository.findOneBy({ course_code });
    if (!major)
      throw new HttpException('Major not found', HttpStatus.BAD_REQUEST);

    return this.majorRepository.update({ course_code }, { ...updateMajor });
  }

  async configTeacherANDPlaceMajor(update: TeacherAndPlaceForMajorParam,) {
    console.log(0);
    
    const major = await this.majorRepository.findOneBy({ course_code: update.course_code });
    if (!major)
      throw new HttpException('Major not found', HttpStatus.BAD_REQUEST);

    if (update.name_teacher != null) {
      const teacher = await this.findTeacherByKey(update.name_teacher);
      if (teacher.length != 0) {
        major.teacher = teacher[0].id_teacher;
      }
    }

    if (update.place != null) {
      const place = await this.findPlaceByKey(update.place);
      if (place.id_place!= null) {
        major.place = place.id_place
      }
    }

    return this.majorRepository.save(major);
  }

  deleteMajorID(course_code: string) {
    return this.majorRepository.delete({ course_code });
  }

  deleteMajor() {
    return this.majorRepository.clear();
  }

  findMajorByCode(id: string) {
    return this.majorRepository.findOne({ where: { course_code: id } });
  }

  async findTeacherByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.teacherKeyRepository.find({
      where: { key_1: findKey },
    });
    const findKey2 = await this.teacherKeyRepository.find({
      where: { key_2: findKey },
    });
    const findKey3 = await this.teacherKeyRepository.find({
      where: { key_3: findKey },
    });
    const findKey4 = await this.teacherKeyRepository.find({
      where: { key_4: findKey },
    });
    const findKey5 = await this.teacherKeyRepository.find({
      where: { key_5: findKey },
    });
    const findKey6 = await this.teacherKeyRepository.find({
      where: { key_6: findKey },
    });

    if (findKey1.length != 0) {
      return await this.findTeacherByName(findKey1[0].key_1);
    } else if (findKey2.length != 0) {
      return await this.findTeacherByName(findKey2[0].key_1);
    } else if (findKey3.length != 0) {
      return await this.findTeacherByName(findKey3[0].key_1);
    } else if (findKey4.length != 0) {
      return await this.findTeacherByName(findKey4[0].key_1);
    } else if (findKey5.length != 0) {
      return await this.findTeacherByName(findKey5[0].key_1);
    } else if (findKey6.length != 0) {
      return await this.findTeacherByName(findKey6[0].key_1);
    }
  }

  findTeacherByName(name: string) {
    return this.teacherRepository.find({ where: { name: name } });
  }

  async findPlaceByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.placeKeyRepository.find({
      where: { key_1: findKey },
    });
    const findKey2 = await this.placeKeyRepository.find({
      where: { key_2: findKey },
    });
    const findKey3 = await this.placeKeyRepository.find({
      where: { key_3: findKey },
    });
    const findKey4 = await this.placeKeyRepository.find({
      where: { key_4: findKey },
    });
    const findKey5 = await this.placeKeyRepository.find({
      where: { key_5: findKey },
    });
    const findKey6 = await this.placeKeyRepository.find({
      where: { key_6: findKey },
    });

    if (findKey1.length != 0) {
      return await this.findPlaceByRoom(findKey1[0].key_1);
    } else if (findKey2.length != 0) {
      return await this.findPlaceByRoom(findKey2[0].key_1);
    } else if (findKey3.length != 0) {
      return await this.findPlaceByRoom(findKey3[0].key_1);
    } else if (findKey4.length != 0) {
      return await this.findPlaceByRoom(findKey4[0].key_1);
    } else if (findKey5.length != 0) {
      return await this.findPlaceByRoom(findKey5[0].key_1);
    } else if (findKey6.length != 0) {
      return await this.findPlaceByRoom(findKey6[0].key_1);
    }
  }

  findPlaceByRoom(findRoom: string) {
    return this.placeRepository.findOne({ where: { room: findRoom } });
  }
}
