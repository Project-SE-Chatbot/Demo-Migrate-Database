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
import { DegreeKeyService } from './degree-key.service';

@Controller('degree-key')
export class DegreeKeyController {
  constructor(private degreeKey: DegreeKeyService) {}

  @Get()
  async getDegreeKey() {
    return await this.degreeKey.findDegreeKey();
  }

  @Get(':key')
  async getMajorKeyByCode(@Param('key') key: string) {
    return await this.degreeKey.findDegreeKeyByCode(key);
  }

  @Post()
  createDegreeKey(@Body() createDegree: keyDTO) {
    this.degreeKey.createDegreeKey(createDegree);
  }

  @Put(':key')
  editDegreeKey(
    @Param('key') key: string,
    @Body() updateDegree: keyDTO,
  ) {
    this.degreeKey.updateDegreeKey(key, updateDegree);
  }

  @Delete(':key')
  deleteDegreeKeyBykey(@Param('key') key: string) {
    this.degreeKey.deleteDegreeKey(key);
  }

  @Delete()
  deleteAllDegreeKey() {
    this.degreeKey.deleteDegreeAllKey();
  }
}
