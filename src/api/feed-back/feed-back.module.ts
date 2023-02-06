import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm/entities/back_end/Feed Back';
import { FeedBackController } from './feed-back.controller';
import { FeedBackService } from './feed-back.service';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedBackController],
  providers: [FeedBackService]
})
export class FeedBackModule {}
