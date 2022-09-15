import { Injectable } from '@nestjs/common';
import { LoginInput, LoginOutput } from '@twc/twc-models';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async auth(input: LoginInput): Promise<LoginOutput> {
    const rt: LoginOutput = {
      accessToken: this.jwtService.sign(input),
    };
    if (input.id) return rt;
  }
}
