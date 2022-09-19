import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AttendInfoInput } from '@twc/twc-models';
import { AttendService } from './attend.service';

@Controller('attends')
export class AttendController {
  constructor(private readonly attendService: AttendService) {}

  @Get()
  async findAll(duration) {
    return await this.attendService.findAll();
  }

  @ApiOperation({
    summary: '출석 체크 입력',
    description: '로그인한 사용자의 출석체크',
  })
  @Post()
  async create(@Body() input: AttendInfoInput) {
    input.attendTime = new Date();
    return await this.attendService.create(input);
  }
}
