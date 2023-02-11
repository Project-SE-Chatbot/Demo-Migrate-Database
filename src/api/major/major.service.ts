import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { createTeacher, ElectiveParam, MajorParam, PlaceParam, TeacherParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major) private majorRepository: Repository<Major>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    @InjectRepository(Free_Elective) private freeElectRepository: Repository<Free_Elective>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  findMajor() {
    return this.majorRepository.find({relations: ['place', 'review', 'teacher']});
  }

  createMajor(majorDetail: MajorParam) {
    const newMajor = this.majorRepository.create(majorDetail);
    return this.majorRepository.save(newMajor);
  }

  async createPlace(id: number, createPlace: PlaceParam){
    const major = await this.majorRepository.findOneBy({ id_major: id });
    if (!major)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    
    const oldPlace = await this.placeRepository.findOneBy({building: createPlace.building, room: createPlace.room})
    console.log(oldPlace);
    
    var place
    if (!oldPlace){
      console.log("Hey");
      
      place = this.placeRepository.create(createPlace);
      const savePlace = await this.placeRepository.save(place);
      major.place = savePlace;
      return this.majorRepository.save(major);
    }
    else {
      var savePlace = await this.placeRepository.save(oldPlace);
      major.place = savePlace;
      return this.majorRepository.save(major);
    }
      
  }

  async createReview(
    id: number,
    createReview: ElectiveParam,
  ) {
    const major = await this.majorRepository.findOneBy({ id_major: id });
    if (!major)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    const newReview = this.freeElectRepository.create({...createReview, major});
    return this.freeElectRepository.save(newReview)
  }

  async createTeacher(
    id: number,
    addTeacher: createTeacher,
  ) {
    
    const nameTeachers = addTeacher.name.split(" / ")
    console.log(nameTeachers);

    var info = []
    
    const major = await this.majorRepository.findOneBy({ id_major: id });
    if (!major)
      throw new HttpException('Subject not found', HttpStatus.BAD_REQUEST);

    for(let i = 0; i < nameTeachers.length; ++i){
      const teacher = await this.teacherRepository.findOne({where: {name: nameTeachers[i]}})
      info.push(teacher)
    }
    console.log(info);
    major.teacher = info
    return this.majorRepository.save(major)

  }

  updateMajor(id_major: number, updateMajor: MajorParam) {
    return this.majorRepository.update({ id_major }, { ...updateMajor });
  }

  deleteMajor(id_major: number) {
    return this.majorRepository.delete({ id_major });
  }

  findMajorByID(id_major: number) {
    return this.majorRepository.findOne({ where: { id_major } });
  }

  findMajorByCode(id: string) {
    return this.majorRepository.findOne({ where: { course_code: id } });
  }

  findMajorByName(name: string){
    return this.majorRepository.findOne({ where: {name: name} })
  }

}
