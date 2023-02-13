import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/test/User';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DataSource } from 'typeorm';

import { Profile } from './typeorm/entities/test/Profile';
import { Post } from './typeorm/entities/test/Post';
import { Faq } from './typeorm/entities/back_end/FAQ';
import { Admin } from './typeorm/entities/back_end/Admin';
import { Degree } from './typeorm/entities/back_end/Degree';
import { Feedback } from './typeorm/entities/back_end/Feed Back';
import { Free_Elective } from './typeorm/entities/back_end/Free Elective';
import { Major } from './typeorm/entities/back_end/Major';
import { Place } from './typeorm/entities/back_end/Place';
import { Q_And_A } from './typeorm/entities/back_end/Q&A';
import { Register } from './typeorm/entities/back_end/Register';
import { Teacher } from './typeorm/entities/back_end/Teacher';
import { dataSourceOptions } from 'db/data-source';
import { DegreeModule } from './api/degree/degree.module';
import { FaqModule } from './api/faq/faq.module';
import { FeedBackModule } from './api/feed-back/feed-back.module';
import { MajorModule } from './api/major/major.module';
import { PlaceModule } from './api/place/place.module';
import { PlanModule } from './api/plan/plan.module';
import { QaModule } from './api/qa/qa.module';
import { RegisterModule } from './api/register/register.module';
import { TeacherModule } from './api/teacher/teacher.module';
import { AdminModule } from './api/admin/admin.module';
import { FreeElectiveModule } from './api/free-elective/free-elective.module';



@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), DegreeModule, FaqModule, FeedBackModule, MajorModule, PlaceModule, PlanModule, QaModule, RegisterModule, TeacherModule, AdminModule, FreeElectiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

