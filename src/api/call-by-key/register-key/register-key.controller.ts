import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { RegisterKeyService } from './register-key.service';

@Controller('register-key')
export class RegisterKeyController {

    constructor(private registerKey: RegisterKeyService){}


    @Get()
    async getRegisterKey(){
        return await this.registerKey.findRegisterKey()
    }

    @Post()
    createRegisterKey(@Body() createRegister: keyDTO){
        this.registerKey.createRegisterKey(createRegister)
    }

    @Put(':id')
    editRegisterKey(@Param('id', ParseIntPipe) id: number, @Body() updateRegister: keyDTO ){
        this.registerKey.updateRegisterKey(id, updateRegister)
    }

    @Delete(':id')
    deleteRegisterKeyByID(@Param('id', ParseIntPipe) id: number){
        this.registerKey.deleteRegisterKey(id)
    }
    
    @Delete()
    deleteAllRegisterKey(){
        this.registerKey.deleteRegisterAllKey()
    }
}
