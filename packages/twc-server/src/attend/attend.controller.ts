import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { AttendaceInformation, AttendInfoInput } from '@twc/twc-models';
import { AttendService } from './attend.service';

@Controller('attends')
export class AttendController {
  constructor(private readonly attendService: AttendService) {}

  @ApiOperation({
    summary: '출석 체크 가져오기',
    description: '로그인한 사용자의 출석체크 정보 가져오기',
  })
  @Get()
  async findAll(duration) {
    return await this.attendService.findAll();
  }

  @ApiOperation({
    summary: '출석 체크 입력',
    description: '로그인한 사용자의 출석체크',
  })
  @ApiBody({ type: AttendInfoInput })
  @Post()
  async create(@Body() input: AttendInfoInput) {
    const attend: AttendaceInformation = {
      id: null,
      userId: input.userId,
      memo: input.memo,
      attendTime: new Date(),
    };

    return await this.attendService.create(attend);
  }
}
