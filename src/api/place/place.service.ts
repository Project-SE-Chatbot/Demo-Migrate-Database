import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { findPlace, PlaceParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place) private placeRepository: Repository<Place>,
  ) {}

  findPlace() {
    return this.placeRepository.find();
  }

  createPlace(placeDetail: PlaceParam) {
    const newPlace = this.placeRepository.create(placeDetail);
    return this.placeRepository.save(newPlace);
  }

  updatePlace(id_place: number, updatePlace: PlaceParam) {
    return this.placeRepository.update({ id_place }, { ...updatePlace });
  }

  deletePlace(id_place: number) {
    return this.placeRepository.delete({ id_place });
  }

  findPlaceByRoom(room: string) {
    return this.placeRepository.findOne({ where: { room: room } });
  }

  findPlaceByName(findRoom: string){
    return this.placeRepository.findOne({ where: {room: findRoom} })
  }
}
