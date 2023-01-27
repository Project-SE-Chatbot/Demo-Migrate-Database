import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { PlaceParam } from 'src/ultils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {

    constructor(
        @InjectRepository(Place) private placeRepository: Repository<Place>
    ){}

    findPlace(){
        return this.placeRepository.find()
    }

    createPlace(placeDetail: PlaceParam){
        const newPlace = this.placeRepository.create(placeDetail)
        return this.placeRepository.save(newPlace)
    }
}
