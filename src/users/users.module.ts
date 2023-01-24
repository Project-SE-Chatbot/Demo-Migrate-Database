import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/test/User';
import { Profile } from 'src/typeorm/entities/test/Profile';
import { Post } from 'src/typeorm/entities/test/Post';
import { Faq } from 'src/typeorm/entities/back_end/FAQ';
import { Admin } from 'src/typeorm/entities/back_end/Admin';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Feedback } from 'src/typeorm/entities/back_end/Feed Back';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { Major } from 'src/typeorm/entities/back_end/Major';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Q_And_A } from 'src/typeorm/entities/back_end/Q&A';
import { Register } from 'src/typeorm/entities/back_end/Register';
import { Teacher } from 'src/typeorm/entities/back_end/Teacher';


@Module({
  imports: [TypeOrmModule.forFeature([User,Profile,Post,
                                      Admin,Degree,Faq,
                                      Feedback,Free_Elective,
                                      Major,Place,Q_And_A,Register,
                                      Teacher])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
