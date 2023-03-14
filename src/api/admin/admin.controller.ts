import { Controller, Delete, Get, Put, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { AdminService } from './admin.service';
import { AdminDTO } from './DTO/admin.dto';
import { updateAdminDTO } from './DTO/updateAdmin.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Get()
  async getAdmin() {
    return await this.adminService.findAdmin();
  }

  @Get("login")
  async loginAdmin(@Body() createAdmin: AdminDTO) {
    return await this.adminService.login(createAdmin);
  }

  @Post()
  createAdmin(@Body() createAdmin: AdminDTO) {
    this.adminService.createAdmin(createAdmin);
  }

  @Put(':name')
  editAdmin(@Param('name') name: string, @Body() updateAdminDTO: updateAdminDTO) {
    this.adminService.updateAdmin(name, updateAdminDTO)
  }

  @Delete(':name')
  deleteAdminByName(@Param('name') name: string ) {
    this.adminService.deleteAdmin(name)
  }

  @Get(':name')
  async findAdminByName(@Param('name') name: string){
    return await this.adminService.findAdminByName(name)
  }

}
