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

  @Get(':key')
  async getMajorElecKeyByCode(@Param('key') key: string) {
    return await this.majorElecKey.findMajorElecKeyByCode(key);
  }

  @Post()
  createMajorElecKey(@Body() createMajorElec: keyDTO) {
    this.majorElecKey.createMajorEleKey(createMajorElec);
  }

  @Put(':key')
  editMajorElecKey(
    @Param('key') key: string,
    @Body() updateMajorElec: keyDTO,
  ) {
    this.majorElecKey.updateMajorEleKey(key, updateMajorElec);
  }

  @Delete(':key')
  deleteMajorElecKeyBykey(@Param('key') key: string) {
    this.majorElecKey.deleteMajorEleKey(key);
  }

  @Delete()
  deleteAllMajorElecKey() {
    this.majorElecKey.deleteMajorEleAllKey();
  }
}
