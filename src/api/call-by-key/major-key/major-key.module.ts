import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Major_Key } from 'src/typeorm/entities/back_end/Major_Key';
import { MajorKeyController } from './major-key.controller';
import { MajorKeyService } from './major-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Major_Key])],
  controllers: [MajorKeyController],
  providers: [MajorKeyService]
})
export class MajorKeyModule {}
