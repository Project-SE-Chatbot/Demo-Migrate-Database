import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Free_Elective } from 'src/typeorm/entities/back_end/Free Elective';
import { FreeElectiveController } from './free-elective.controller';
import { FreeElectiveService } from './free-elective.service';

@Module({
  imports: [TypeOrmModule.forFeature([Free_Elective])],
  controllers: [FreeElectiveController],
  providers: [FreeElectiveService]
})
export class FreeElectiveModule {}
