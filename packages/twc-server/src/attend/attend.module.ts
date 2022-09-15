import { Module } from '@nestjs/common';
import { AttendService } from './attend.service';

@Module({
  providers: [AttendService]
})
export class AttendModule {}
