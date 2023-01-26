import { Module } from '@nestjs/common';
import { FreeElectiveController } from './free-elective.controller';
import { FreeElectiveService } from './free-elective.service';

@Module({
  controllers: [FreeElectiveController],
  providers: [FreeElectiveService]
})
export class FreeElectiveModule {}
