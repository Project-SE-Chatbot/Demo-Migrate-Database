import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Degree } from 'src/typeorm/entities/back_end/Degree';
import { Register } from 'src/typeorm/entities/back_end/Register';
import { Register_Key } from 'src/typeorm/entities/back_end/Register_Key';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [TypeOrmModule.forFeature([Register, Register_Key])],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
