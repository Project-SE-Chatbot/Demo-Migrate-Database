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

  @Post()
  createDegreeKey(@Body() createDegree: keyDTO) {
    this.degreeKey.createDegreeKey(createDegree);
  }

  @Put(':id')
  editDegreeKey(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDegree: keyDTO,
  ) {
    this.degreeKey.updateDegreeKey(id, updateDegree);
  }

  @Delete(':id')
  deleteDegreeKeyByID(@Param('id', ParseIntPipe) id: number) {
    this.degreeKey.deleteDegreeKey(id);
  }

  @Delete()
  deleteAllDegreeKey() {
    this.degreeKey.deleteDegreeAllKey();
  }
}
