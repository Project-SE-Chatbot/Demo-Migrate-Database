import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Major_Elective } from 'src/typeorm/entities/back_end/Major_Elective';
import { Major_Elective_Key } from 'src/typeorm/entities/back_end/Major_Elective_Key';
import { majorElectiveType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorElectiveService {
  constructor(
    @InjectRepository(Major_Elective)
    private majorElectiveRepository: Repository<Major_Elective>,
    @InjectRepository(Major_Elective_Key)
    private majorElectiveKeyRepository: Repository<Major_Elective_Key>,
  ) {}

  findMajorElective() {
    return this.majorElectiveRepository.find();
  }

  async findMajorElectiveByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.majorElectiveKeyRepository.find({
      where: { key_1: findKey },
    });
    const findKey2 = await this.majorElectiveKeyRepository.find({
      where: { key_2: findKey },
    });
    const findKey3 = await this.majorElectiveKeyRepository.find({
      where: { key_3: findKey },
    });
    const findKey4 = await this.majorElectiveKeyRepository.find({
      where: { key_4: findKey },
    });
    const findKey5 = await this.majorElectiveKeyRepository.find({
      where: { key_5: findKey },
    });
    const findKey6 = await this.majorElectiveKeyRepository.find({
      where: { key_6: findKey },
    });

    if (findKey1.length != 0) {
      if (findKey1[0].key_1 == 'ตัวเลือก Major') {
        return await this.findMajorElective();
      }
      return await this.findMajorElectiveByName(findKey1[0].key_1);
    } else if (findKey2.length != 0) {
      if (findKey2[0].key_1 == 'ตัวเลือก Major') {
        return await this.findMajorElective();
      }
      return await this.findMajorElectiveByName(findKey2[0].key_1);
    } else if (findKey3.length != 0) {
      if (findKey3[0].key_1 == 'ตัวเลือก Major') {
        return await this.findMajorElective();
      }
      return await this.findMajorElectiveByName(findKey3[0].key_1);
    } else if (findKey4.length != 0) {
      if (findKey4[0].key_1 == 'ตัวเลือก Major') {
        return await this.findMajorElective();
      }
      return await this.findMajorElectiveByName(findKey4[0].key_1);
    } else if (findKey5.length != 0) {
      if (findKey5[0].key_1 == 'ตัวเลือก Major') {
        return await this.findMajorElective();
      }
      return await this.findMajorElectiveByName(findKey5[0].key_1);
    } else if (findKey6.length != 0) {
      if (findKey6[0].key_1 == 'ตัวเลือก Major') {
        return await this.findMajorElective();
      }
      return await this.findMajorElectiveByName(findKey6[0].key_1);
    }
  }

  createMajorElective(degreeDetail: majorElectiveType) {
    const newMajorElec = this.majorElectiveRepository.create(degreeDetail);
    return this.majorElectiveRepository.save(newMajorElec);
  }

  updateMajorElective(course_code: string, updateDegree: majorElectiveType) {
    return this.majorElectiveRepository.update(
      { course_code },
      { ...updateDegree },
    );
  }

  deleteMajorElective(course_code: string) {
    this.majorElectiveKeyRepository.delete({ key_1: course_code });
    return this.majorElectiveRepository.delete({ course_code });
  }

  findMajorElectiveByName(course_code: string) {
    return this.majorElectiveRepository.findOne({ where: { course_code } });
  }
}
