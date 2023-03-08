import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';
import { Teacher_Key } from 'src/typeorm/entities/back_end/Teacher_Key';
import { TeacherKeyController } from './teacher-key.controller';
import { TeacherKeyService } from './teacher-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher_Key, Teacher])],
  controllers: [TeacherKeyController],
  providers: [TeacherKeyService]
})
export class TeacherKeyModule {}
