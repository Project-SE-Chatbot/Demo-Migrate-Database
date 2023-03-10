import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { PlaceKeyService } from './place-key.service';

@Controller('place-key')
export class PlaceKeyController {
  constructor(private placeKey: PlaceKeyService) {}

  @Get()
  async getPlaceKey() {
    return await this.placeKey.findPlaceKey();
  }

  @Get(':key')
  async getPlaceKeyByCode(@Param('key') key: string) {
    return await this.placeKey.findPlaceKeyByCode(key);
  }

  @Post()
  createPlaceKey(@Body() createPlace: keyDTO) {
    this.placeKey.createPlaceKey(createPlace);
  }

  @Put(':key')
  editPlaceKey(
    @Param('key', ParseIntPipe) key: string,
    @Body() updatePlace: keyDTO,
  ) {
    this.placeKey.updatePlaceKey(key, updatePlace);
  }

  @Delete(':key')
  deletePlaceKeyBykey(@Param('key') key: string) {
    this.placeKey.deletePlaceKey(key);
  }

  @Delete()
  deleteAllPlaceKey() {
    this.placeKey.deletePlaceAllKey();
  }
}
