import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { MajorKeyService } from './major-key.service';

@Controller('major-key')
export class MajorKeyController {
    constructor(private majorKey: MajorKeyService) {}

  @Get()
  async getMajorKey() {
    return await this.majorKey.findMajorKey();
  }

  @Get(':course_code')
  async getMajorKeyByCode(@Param('course_code') course_code: string) {
    return await this.majorKey.findMajorKeyByCode(course_code);
  }

  @Post()
  createMajorKey(@Body() createMajor: keyDTO) {
    this.majorKey.createMajorKey(createMajor);
  }

  @Put(':key')
  editMajorKey(
    @Param('key') key: string,
    @Body() updateMajor: keyDTO,
  ) {
    this.majorKey.updateMajorKey(key, updateMajor);
  }

  @Delete(':key')
  deleteMajorKeyBykey(@Param('key') key: string) {
    this.majorKey.deleteMajorKey(key);
  }

  @Delete()
  deleteAllMajorKey() {
    this.majorKey.deleteMajorAllKey();
  }
}
