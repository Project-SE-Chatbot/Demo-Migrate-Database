import { Controller, Delete, Get, Put } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AdminService } from './admin.service';
import { AdminDTO } from './DTO/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService){}
    @Get()
    async getAdmin(){
        return await this.adminService.findAdmin()
    }

    @Post()
    createAdmin(@Body() createAdmin: AdminDTO){
        this.adminService.createAdmin(createAdmin)
    }

    @Put()
    editAdmin(){

    }

    @Delete()
    deleteAdminByID(){
        
    }
}
