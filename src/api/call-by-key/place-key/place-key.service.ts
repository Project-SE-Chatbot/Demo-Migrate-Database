import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place_Key } from 'src/typeorm/entities/back_end/Place_Key';
import { keyType } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceKeyService {
  constructor(
    @InjectRepository(Place_Key)
    private PlaceKeyRepository: Repository<Place_Key>,
  ) {}

  findPlaceKey() {
    return this.PlaceKeyRepository.find();
  }

  async findPlaceKeyByCode(key: string) {
    return await this.PlaceKeyRepository.findOne({where: {key_1: key}});
  }

  createPlaceKey(placeKeyDetail: keyType) {
    const newPlaceKey = this.PlaceKeyRepository.create(placeKeyDetail);
    return this.PlaceKeyRepository.save(newPlaceKey);
  }

  updatePlaceKey(key_1: string, updatePlaceKey: keyType) {
    return this.PlaceKeyRepository.update(
      { key_1 },
      { ...updatePlaceKey },
    );
  }

  deletePlaceKey(key_1: string) {
    return this.PlaceKeyRepository.delete({ key_1 });
  }

  deletePlaceAllKey() {
    return this.PlaceKeyRepository.clear();
  }
}
