import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@twc/twc-models';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('유저 정보')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '전체 유저 정보 가져오기',
    description: '가입 유저 전체 리스트 가져오기',
  })
  @ApiResponse({
    status: 200,
    type: [User],
    description: '유저 리스트',
  })
  @Get()
  getUsers(): string {
    return this.usersService.getUsers();
  }

  @ApiOperation({
    summary: '유저 정보 입력하기',
    description: '회원 가입 또는 유저 정보 수동 입력',
  })
  @ApiResponse({
    status: 200,
    type: User,
    description: '유저 정보',
  })
  @Post()
  createUser(@Body() input: User ): Promise<string> {
    return this.usersService.createUser(input);
  }

  @ApiOperation({
    summary: '특정 유저 정보 가져오기',
    description: '특정 유저의 정보 가져오기',
  })
  @ApiResponse({
    status: 200,
    type: [User],
    description: '유저 정보',
  })
  @Get('/:_id')
  async getUser(@Param('_id') _id: number): Promise<User> {
    return await this.usersService.getUser(_id);
  }
    
}
