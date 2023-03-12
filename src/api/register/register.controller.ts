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
import { findKeyDTO } from '../dto_global/findKey.dto';
import { findRegisterDTO } from './DTO/findName.dto';
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

  @Get('key')
    async getPlaceKey(@Body() findRegister: findKeyDTO){
        return await this.registerService.findRegisterByKey(findRegister.key)
    }

  @Post()
  createRegister(@Body() createReg: RegisterDTO) {
    return this.registerService.createReg(createReg);
  }


  @Put('name')
  editRegister(
    @Body() updateRegister: updateRegisterDTO,
  ) {
    this.registerService.updateRegister(updateRegister.name, updateRegister);
  }

  @Delete(':name')
  deleteRegisterByID(@Param('name') name: string) {
    this.registerService.deleteRegister(name);
  }

  @Get(':name')
  async findRegisterByID(@Param('name') name: string){
    return await this.registerService.findRegisterByName(name)
  }
}
