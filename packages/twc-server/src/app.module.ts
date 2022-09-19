import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AttendController } from './attend/attend.controller';
import { AttendModule } from './attend/attend.module';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './lib/db/db.module';

@Module({
  imports: [UsersModule, AttendModule, AuthModule, DbModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
