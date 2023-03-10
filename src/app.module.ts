import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

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
import { TeacherKeyModule } from './api/call-by-key/teacher-key/teacher-key.module';
import { MajorKeyModule } from './api/call-by-key/major-key/major-key.module';
import { FreeElecKeyModule } from './api/call-by-key/free-elec-key/free-elec-key.module';
import { PlaceKeyModule } from './api/call-by-key/place-key/place-key.module';
import { RegisterKeyModule } from './api/call-by-key/register-key/register-key.module';
import { DegreeKeyModule } from './api/call-by-key/degree-key/degree-key.module';
import { MajorElectiveModule } from './api/major-elective/major-elective.module';
import { MajorElectiveKeyModule } from './api/call-by-key/major-elective/major-elective-key.module';



@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), DegreeModule, FaqModule, FeedBackModule, MajorModule, PlaceModule, PlanModule, QaModule, RegisterModule, TeacherModule, AdminModule, FreeElectiveModule, TeacherKeyModule, MajorKeyModule, FreeElecKeyModule, PlaceKeyModule, RegisterKeyModule, DegreeKeyModule, MajorElectiveModule, MajorElectiveKeyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

