import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/test/User';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
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



@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

