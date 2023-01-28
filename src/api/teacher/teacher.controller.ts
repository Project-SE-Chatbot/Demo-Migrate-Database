import { Controller, Delete, Get, ParseIntPipe, Put } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
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

    @Post()
    createTeacher(@Body() createTeacher: TeacherDTO){
        this.teacherService.createTeacher(createTeacher)
    }

    @Put(':id')
    editTeacher(@Param('id', ParseIntPipe) id: number, @Body() updateTeacher: updateTeacherDTO ){
        this.teacherService.updateTeacher(id, updateTeacher)
    }

    @Delete(':id')
    deleteTeacherByID(@Param('id', ParseIntPipe) id: number){
        this.teacherService.deleteTeacher(id)
    }

    @Get(':id')
    findTeacherByID(@Param('id', ParseIntPipe) id: number){
        this.teacherService.findTeacherByID(id)
    }
}
