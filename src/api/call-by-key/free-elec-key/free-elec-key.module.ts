import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Free_Elective_Key } from 'src/typeorm/entities/back_end/Free_Elective_Key';
import { FreeElecKeyController } from './free-elec-key.controller';
import { FreeElecKeyService } from './free-elec-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Free_Elective_Key])],
  controllers: [FreeElecKeyController],
  providers: [FreeElecKeyService]
})
export class FreeElecKeyModule {}
