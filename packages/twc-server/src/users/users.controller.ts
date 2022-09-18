import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@twc/twc-models';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('유저 정보')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.usersService.getUsers();
  }

  @Post()
  save(@Body() input) {
    return this.usersService.save(input);
  }
}