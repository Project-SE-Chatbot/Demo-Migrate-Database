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

  @Post()
  createMajorKey(@Body() createMajor: keyDTO) {
    this.majorKey.createMajorKey(createMajor);
  }

  @Put(':id')
  editMajorKey(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMajor: keyDTO,
  ) {
    this.majorKey.updateMajorKey(id, updateMajor);
  }

  @Delete(':id')
  deleteMajorKeyByID(@Param('id', ParseIntPipe) id: number) {
    this.majorKey.deleteMajorKey(id);
  }

  @Delete()
  deleteAllMajorKey() {
    this.majorKey.deleteMajorAllKey();
  }
}
