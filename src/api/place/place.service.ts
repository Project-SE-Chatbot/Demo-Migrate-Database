import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Place_Key } from 'src/typeorm/entities/back_end/Place_Key';
import { findPlace, PlaceParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    @InjectRepository(Place_Key) private placeKeyRepository: Repository<Place_Key>,
  ) {}

  findPlace() {
    return this.placeRepository.find();
  }
  
  async findPlaceByKey(findKey: string) {
    console.log(findKey);
    const findKey1 = await this.placeKeyRepository.find({where: {key_1: findKey}})
    const findKey2 = await this.placeKeyRepository.find({where: {key_2: findKey}})
    const findKey3 = await this.placeKeyRepository.find({where: {key_3: findKey}})
    const findKey4 = await this.placeKeyRepository.find({where: {key_4: findKey}})
    const findKey5 = await this.placeKeyRepository.find({where: {key_5: findKey}})
    const findKey6 = await this.placeKeyRepository.find({where: {key_6: findKey}})

    if(findKey1.length != 0){
      if(findKey1[0].key_1 == 'ตึก 30 ปี'){
        return await this.findPlace()
      }
      return await this.findPlaceByRoom(findKey1[0].key_1)
      
    }else if(findKey2.length != 0){
      if(findKey2[0].key_1 == 'ตึก 30 ปี'){
        return await this.findPlace()
      }
      return await this.findPlaceByRoom(findKey2[0].key_1)
      
    }else if(findKey3.length != 0){
      if(findKey3[0].key_1 == 'ตึก 30 ปี'){
        return await this.findPlace()
      }
      return await this.findPlaceByRoom(findKey3[0].key_1)
      
    }else if(findKey4.length != 0){
      if(findKey4[0].key_1 == 'ตึก 30 ปี'){
        return await this.findPlace()
      }
      return await this.findPlaceByRoom(findKey4[0].key_1)
      
    }else if(findKey5.length != 0){
      if(findKey5[0].key_1 == 'ตึก 30 ปี'){
        return await this.findPlace()
      }
      return await this.findPlaceByRoom(findKey5[0].key_1)
      
    }else if(findKey6.length != 0){
      if(findKey6[0].key_1 == 'ตึก 30 ปี'){
        return await this.findPlace()
      }
      return await this.findPlaceByRoom(findKey6[0].key_1)
      
    }

  }

  createPlace(placeDetail: PlaceParam) {
    const newPlace = this.placeRepository.create(placeDetail);
    return this.placeRepository.save(newPlace);
  }

  updatePlace(room: string, updatePlace: PlaceParam) {
    return this.placeRepository.update({ room }, { ...updatePlace });
  }

  deletePlace(id_place: number) {
    return this.placeRepository.delete({ id_place });
  }

  findPlaceByID(id: number) {
    return this.placeRepository.findOne({ where: { id_place: id } });
  }

  findPlaceByRoom(findRoom: string){
    return this.placeRepository.findOne({ where: {room: findRoom} })
  }
}
