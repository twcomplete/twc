import { Test, TestingModule } from '@nestjs/testing';
import { DbProviders } from './db.provider';

describe('DbProviders', () => {
  let service: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...DbProviders],
    }).compile();

    // service = module.get(DbProviders);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
