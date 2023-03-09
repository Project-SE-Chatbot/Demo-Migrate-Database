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

  @Post()
  createPlaceKey(@Body() createPlace: keyDTO) {
    this.placeKey.createPlaceKey(createPlace);
  }

  @Put(':id')
  editPlaceKey(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlace: keyDTO,
  ) {
    this.placeKey.updatePlaceKey(id, updatePlace);
  }

  @Delete(':id')
  deletePlaceKeyByID(@Param('id', ParseIntPipe) id: number) {
    this.placeKey.deletePlaceKey(id);
  }

  @Delete()
  deleteAllPlaceKey() {
    this.placeKey.deletePlaceAllKey();
  }
}
