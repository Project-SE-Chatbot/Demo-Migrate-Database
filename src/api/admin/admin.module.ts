import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/entities/back_end/Admin';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
