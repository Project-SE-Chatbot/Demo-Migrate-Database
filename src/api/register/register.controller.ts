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
import { DegreeDTO } from '../degree/DTO/degree.dto';
import { RegisterDTO } from './DTO/register.dto';
import { updateRegisterDTO } from './DTO/updateRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Get()
  async getRegister() {
    return await this.registerService.findRegister();
  }

  @Post()
  createRegister(@Body() createReg: RegisterDTO) {
    return this.registerService.createReg(createReg);
  }

  @Post(':id/degree')
  createDegree(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDegree: DegreeDTO,
  ) {
    return this.registerService.createDegree(id, createDegree)
  }

  @Put(':id')
  editRegister(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRegister: updateRegisterDTO,
  ) {
    this.registerService.updateRegister(id, updateRegister);
  }

  @Delete(':id')
  deleteRegisterByID(@Param('id', ParseIntPipe) id: number) {
    this.registerService.deleteRegister(id);
  }

  @Get(':id')
  findRegisterByID(@Param('id', ParseIntPipe) id: number){
    this.registerService.findRegisterByID(id)
  }
}
