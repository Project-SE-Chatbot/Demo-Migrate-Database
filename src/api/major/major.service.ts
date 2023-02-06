import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { MajorParam, PlaceParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major) private majorRepository: Repository<Major>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
  ) {}

  findMajor() {
    return this.majorRepository.find({relations: ['Place']});
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

  updateMajor(id_major: number, updateMajor: MajorParam) {
    return this.majorRepository.update({ id_major }, { ...updateMajor });
  }

  deleteMajor(id_major: number) {
    return this.majorRepository.delete({ id_major });
  }

  findMajorByID(id_major: number) {
    return this.majorRepository.findOne({ where: { id_major } });
  }
}
