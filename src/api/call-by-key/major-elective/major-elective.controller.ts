import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { MajorElectiveService } from './major-elective.service';

@Controller('major-elective')
export class MajorElectiveController {

    constructor(private majorElecKey: MajorElectiveService) {}

  @Get()
  async getMajorElecKey() {
    return await this.majorElecKey.findMajorElecKey();
  }

  @Post()
  createMajorElecKey(@Body() createMajorElec: keyDTO) {
    this.majorElecKey.createMajorEleKey(createMajorElec);
  }

  @Put(':id')
  editMajorElecKey(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMajorElec: keyDTO,
  ) {
    this.majorElecKey.updateMajorEleKey(id, updateMajorElec);
  }

  @Delete(':id')
  deleteMajorElecKeyByID(@Param('id', ParseIntPipe) id: number) {
    this.majorElecKey.deleteMajorEleKey(id);
  }

  @Delete()
  deleteAllMajorElecKey() {
    this.majorElecKey.deleteMajorEleAllKey();
  }
}
