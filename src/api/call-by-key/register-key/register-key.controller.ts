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
import { RegisterKeyService } from './register-key.service';

@Controller('register-key')
export class RegisterKeyController {
  constructor(private registerKey: RegisterKeyService) {}

  @Get()
  async getRegisterKey() {
    return await this.registerKey.findRegisterKey();
  }

  @Get(':key')
  async getRegisterKeyByCode(@Param('key') key: string) {
    return await this.registerKey.findRegisterKeyByCode(key);
  }

  @Post()
  createRegisterKey(@Body() createRegister: keyDTO) {
    this.registerKey.createRegisterKey(createRegister);
  }

  @Put(':key')
  editRegisterKey(
    @Param('key') key: string,
    @Body() updateRegister: keyDTO,
  ) {
    this.registerKey.updateRegisterKey(key, updateRegister);
  }

  @Delete(':key')
  deleteRegisterKeyByKey(@Param('key') key: string) {
    this.registerKey.deleteRegisterKey(key);
  }

  @Delete()
  deleteAllRegisterKey() {
    this.registerKey.deleteRegisterAllKey();
  }
}
