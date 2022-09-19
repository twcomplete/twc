import { Module } from '@nestjs/common';
import { DbModule } from 'src/lib/db/db.module';
import { AttendController } from './attend.controller';
import { attendsProviders } from './attend.provider';
import { AttendService } from './attend.service';

@Module({
  imports: [DbModule],
  providers: [AttendService, ...attendsProviders],
  controllers: [AttendController],
})
export class AttendModule {}
