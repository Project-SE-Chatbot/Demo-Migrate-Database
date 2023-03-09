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

  createPlaceKey(placeKeyDetail: keyType) {
    const newPlaceKey = this.PlaceKeyRepository.create(placeKeyDetail);
    return this.PlaceKeyRepository.save(newPlaceKey);
  }

  updatePlaceKey(id_place_key: number, updatePlaceKey: keyType) {
    return this.PlaceKeyRepository.update(
      { id_place_key },
      { ...updatePlaceKey },
    );
  }

  deletePlaceKey(id_place_key: number) {
    return this.PlaceKeyRepository.delete({ id_place_key });
  }

  deletePlaceAllKey() {
    return this.PlaceKeyRepository.clear();
  }
}
