import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { FreeElecKeyService } from './free-elec-key.service';

@Controller('free-elec-key')
export class FreeElecKeyController {

    constructor(private freeElecKey: FreeElecKeyService) {}

  @Get()
  async getFreeElecKey() {
    return await this.freeElecKey.findFreeElecKey();
  }

  @Get(':key')
  async getMajorKeyByCode(@Param('key') key: string) {
    return await this.freeElecKey.findFreeElecKeyByCode(key);
  }

  @Post()
  createFreeElecKey(@Body() createFreeElec: keyDTO) {
    this.freeElecKey.createFreeElecKey(createFreeElec);
  }

  @Put(':key')
  editFreeElecKey(
    @Param('key') key: string,
    @Body() updateFreeElec: keyDTO,
  ) {
    this.freeElecKey.updateFreeElecKey(key, updateFreeElec);
  }

  @Delete(':key')
  deleteFreeElecKeyBykey(@Param('key') key: string) {
    this.freeElecKey.deleteFreeElecKey(key);
  }

  @Delete()
  deleteAllFreeElecKey() {
    this.freeElecKey.deleteFreeElecAllKey();
  }
}
