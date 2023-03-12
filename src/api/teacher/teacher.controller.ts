import { Controller, Delete, Get, ParseIntPipe, Put } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { findKeyDTO } from '../dto_global/findKey.dto';
import { findNameDTO } from './DTO/findName.dto';
import { TeacherDTO } from './DTO/teacher.dto';
import { updateTeacherDTO } from './DTO/updateTeacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
    constructor(private teacherService: TeacherService){}

    @Get()
    async getTeacher(){
        return await this.teacherService.findTeacher()
    }

    @Get('key')
    async getTeacherKey(@Body() findTeacher: findKeyDTO){
        return await this.teacherService.findTeacherByKey(findTeacher.key)
    }

    @Post()
    createTeacher(@Body() createTeacher: TeacherDTO){
        this.teacherService.createTeacher(createTeacher)
    }

    @Put('name')
    editTeacher(@Body() updateTeacher: updateTeacherDTO ){
        this.teacherService.updateTeacher(updateTeacher.name, updateTeacher)
    }

    @Delete(':name')
    deleteTeacherByID(@Param('id', ParseIntPipe) id: number){
        this.teacherService.deleteTeacher(id)
    }

    // @Get(':id')
    // async findTeacherByID(@Param('id', ParseIntPipe) id: number){
    //     return await this.teacherService.findTeacherByID(id)
    // }

    @Get(':name')
    async findTeacherByName(@Param('name') name: string){
        return await this.teacherService.findTeacherByName(name)
    }
}
