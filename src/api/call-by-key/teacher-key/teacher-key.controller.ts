import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { findKeyDTO } from 'src/api/dto_global/findKey.dto';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { TeacherKeyService } from './teacher-key.service';

@Controller('teacher-key')
export class TeacherKeyController {
    constructor(private teacherKey: TeacherKeyService){}


    @Get()
    async getTeacherKey(){
        return await this.teacherKey.findTeacherKey()
    }

    @Post()
    createTeacherKey(@Body() createTeacher: keyDTO){
        this.teacherKey.createTeacherKey(createTeacher)
    }

    @Put(':id')
    editTeacherKey(@Param('id', ParseIntPipe) id: number, @Body() updateTeacher: keyDTO ){
        this.teacherKey.updateTeacherKey(id, updateTeacher)
    }

    @Delete(':id')
    deleteTeacherKeyByID(@Param('id', ParseIntPipe) id: number){
        this.teacherKey.deleteTeacherKey(id)
    }
    
    @Delete()
    deleteAllTeacherKey(){
        this.teacherKey.deleteTeacherAllKey()
    }
}
