import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register_Key } from 'src/typeorm/entities/back_end/Register_Key';
import { RegisterKeyController } from './register-key.controller';
import { RegisterKeyService } from './register-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Register_Key])],
  controllers: [RegisterKeyController],
  providers: [RegisterKeyService]
})
export class RegisterKeyModule {}
