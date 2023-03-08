import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/typeorm/entities/back_end/Place';
import { Place_Key } from 'src/typeorm/entities/back_end/Place_Key';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  imports: [TypeOrmModule.forFeature([Place, Place_Key])],
  controllers: [PlaceController],
  providers: [PlaceService]
})
export class PlaceModule {}
