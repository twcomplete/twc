import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule } from 'src/lib/db/db.module';
import { AttendSchema } from 'src/lib/interfaces/attend.interface';
import { AttendController } from './attend.controller';
import { attendsProviders } from './attend.provider';
import { AttendService } from './attend.service';

@Module({
  imports: [DbModule, MongooseModule.forFeature([{ name: AttendSchema.id }])],
  providers: [AttendService],
  controllers: [AttendController],
})
export class AttendModule {}
