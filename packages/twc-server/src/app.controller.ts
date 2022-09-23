import { Controller, Get } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiGatewayTimeoutResponse,
  ApiBadGatewayResponse,
  ApiServiceUnavailableResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: '헬스체크',
    description: `API 서버의 정상 동작 여부를 체크합니다.`,
  })
  @ApiOkResponse({ status: 200, description: '성공' })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: '인스턴스 비정상',
  })
  @ApiGatewayTimeoutResponse({ status: 504, description: '모든 서버 OFFLINE' })
  @ApiBadGatewayResponse({ status: 502, description: '로드밸런서 오류' })
  @ApiServiceUnavailableResponse({ status: 503, description: '과부하' })
  @Get()
  healthCheck(): string {
    try {
      return this.appService.healthCheck();
    } catch (e) {
      console.log(e);
    }
  }
}
