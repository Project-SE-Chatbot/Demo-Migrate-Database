import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { ElectiveParam, MajorParam, PlaceParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major) private majorRepository: Repository<Major>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    @InjectRepository(Free_Elective) private freeElectRepository: Repository<Free_Elective>,
  ) {}

  findMajor() {
    return this.majorRepository.find({relations: ['place_study', 'review']});
  }

  createMajor(majorDetail: MajorParam) {
    const newMajor = this.majorRepository.create(majorDetail);
    return this.majorRepository.save(newMajor);
  }

  async createPlace(id: number, createPlace: PlaceParam){
    const major = await this.majorRepository.findOneBy({ id_major: id });
    if (!major)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

      const newPlace = this.placeRepository.create(createPlace);
      const savePlace = await this.placeRepository.save(newPlace);
      major.place_study = savePlace;
      return this.majorRepository.save(major);
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
