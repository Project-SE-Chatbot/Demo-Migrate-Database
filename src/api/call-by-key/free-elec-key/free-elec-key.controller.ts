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

  @Post()
  createFreeElecKey(@Body() createFreeElec: keyDTO) {
    this.freeElecKey.createFreeElecKey(createFreeElec);
  }

  @Put(':id')
  editFreeElecKey(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFreeElec: keyDTO,
  ) {
    this.freeElecKey.updateFreeElecKey(id, updateFreeElec);
  }

  @Delete(':id')
  deleteFreeElecKeyByID(@Param('id', ParseIntPipe) id: number) {
    this.freeElecKey.deleteFreeElecKey(id);
  }

  @Delete()
  deleteAllFreeElecKey() {
    this.freeElecKey.deleteFreeElecAllKey();
  }
}
