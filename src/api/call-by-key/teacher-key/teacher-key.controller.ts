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
import { findKeyDTO } from 'src/api/dto_global/findKey.dto';
import { keyDTO } from 'src/api/dto_global/key.dto';
import { TeacherKeyService } from './teacher-key.service';

@Controller('teacher-key')
export class TeacherKeyController {
  constructor(private teacherKey: TeacherKeyService) {}

  @Get()
  async getTeacherKey() {
    return await this.teacherKey.findTeacherKey();
  }

  @Get(':key')
  async getTeacherKeyByCode(@Param('key') key: string) {
    return await this.teacherKey.findTeacherKeyByCode(key);
  }

  @Post()
  createTeacherKey(@Body() createTeacher: keyDTO) {
    this.teacherKey.createTeacherKey(createTeacher);
  }

  @Put(':key')
  editTeacherKey(
    @Param('key') key: string,
    @Body() updateTeacher: keyDTO,
  ) {
    this.teacherKey.updateTeacherKey(key, updateTeacher);
  }

  @Delete(':key')
  deleteTeacherKeyBykey(@Param('key') key: string) {
    this.teacherKey.deleteTeacherKey(key);
  }

  @Delete()
  deleteAllTeacherKey() {
    this.teacherKey.deleteTeacherAllKey();
  }
}
