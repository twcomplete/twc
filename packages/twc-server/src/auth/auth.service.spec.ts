import { Test, TestingModule } from '@nestjs/testing';
import { LoginInput } from '@twc/twc-models';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', async () => {
    const input: LoginInput = {
      id: 'hana',
      pwd: '21color',
    };
    const rt = await service.auth(input);
    console.log(rt);

    expect(rt).toBeDefined();
  });
});
