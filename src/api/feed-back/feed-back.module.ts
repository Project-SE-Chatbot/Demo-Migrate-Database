import { Module } from '@nestjs/common';
import { FeedBackController } from './feed-back.controller';
import { FeedBackService } from './feed-back.service';

@Module({
  controllers: [FeedBackController],
  providers: [FeedBackService]
})
export class FeedBackModule {}
