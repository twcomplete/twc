import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AttendInfoInput } from '@twc/twc-models';
import { AttendService } from './attend.service';

@Controller('attend')
export class AttendController {
  constructor(private readonly attendService: AttendService) {}

  @Get()
  getAttends(duration) {}

  @ApiOperation({
    summary: '출석 체크 입력',
    description: '로그인한 사용자의 출석체크',
  })
  @Post()
  async attend(@Body() input: AttendInfoInput) {
    return await this.attendService.attend(input);
  }
}
