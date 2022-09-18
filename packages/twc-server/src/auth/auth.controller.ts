import {
  Body,
  Controller,
  ForbiddenException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginInput, LoginOutput } from '@twc/twc-models';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: '로그인',
    description: '로그인',
  })
  @ApiResponse({
    status: 200,
    type: LoginOutput,
    description: '로그인 성공',
  })

  @Post()
  async auth(@Body() input: LoginInput) {
    if (input.id === 'hana' && input.pwd === '21color') {
      return this.authService.auth(input);
    } else {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: ['Permission Denied'],
        error: 'Forbidden',
      });
    }
  }
}
