import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Teacher_Key } from 'src/typeorm/entities/back_end/Teacher_Key';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Teacher_Key])],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}
