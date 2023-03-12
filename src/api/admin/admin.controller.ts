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

  @Get()
  async loginAdmin(@Body() createAdmin: AdminDTO) {
    return await this.adminService.login(createAdmin);
  }

  @Post()
  createAdmin(@Body() createAdmin: AdminDTO) {
    this.adminService.createAdmin(createAdmin);
  }

  @Put(':id')
  editAdmin(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDTO: updateAdminDTO) {
    this.adminService.updateAdmin(id, updateAdminDTO)
  }

  @Delete(':id')
  deleteAdminByID(@Param('id', ParseIntPipe) id: number ) {
    this.adminService.deleteAdmin(id)
  }

  @Get(':id')
  async findAdminByID(@Param('id', ParseIntPipe) id: number){
    return await this.adminService.findAdminByID(id)
  }

}
