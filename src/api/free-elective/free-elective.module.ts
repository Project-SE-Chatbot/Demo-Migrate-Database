import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Free_Elective_Key } from 'src/typeorm/entities/back_end/Free_Elective_Key';
import { Free_Elective_New } from 'src/typeorm/entities/back_end/Free_Elective_New';
import { FreeElectiveController } from './free-elective.controller';
import { FreeElectiveService } from './free-elective.service';

@Module({
  imports: [TypeOrmModule.forFeature([Free_Elective_New, Free_Elective_Key])],
  controllers: [FreeElectiveController],
  providers: [FreeElectiveService]
})
export class FreeElectiveModule {}
