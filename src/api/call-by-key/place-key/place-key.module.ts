import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place_Key } from 'src/typeorm/entities/back_end/Place_Key';
import { PlaceKeyController } from './place-key.controller';
import { PlaceKeyService } from './place-key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Place_Key])],
  controllers: [PlaceKeyController],
  providers: [PlaceKeyService]
})
export class PlaceKeyModule {}
