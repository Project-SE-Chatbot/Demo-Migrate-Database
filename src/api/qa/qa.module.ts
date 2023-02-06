import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Q_And_A } from 'src/typeorm/entities/back_end/Q&A';
import { QaController } from './qa.controller';
import { QaService } from './qa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Q_And_A])],
  controllers: [QaController],
  providers: [QaService]
})
export class QaModule {}
