import { Controller, Delete, Get, Put } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { TeacherDTO } from './DTO/teacher.dto';
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

    @Put()
    editTeacher(){

    }

    @Delete()
    deleteTeacherByID(){
        
    }
}
