import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RegisterDTO } from './DTO/register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private registerService: RegisterService){}

    @Get()
    async getRegister(){
        return await this.registerService.findRegister()
    }

    @Post()
    createRegister(@Body() createReg: RegisterDTO){
        this.registerService.createReg(createReg)
    }

    @Put()
    editRegister(){

    }

    @Delete()
    deleteRegisterByID(){
        
    }
}
