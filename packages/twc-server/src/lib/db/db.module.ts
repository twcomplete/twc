import { Module } from '@nestjs/common';
import { DbProviders } from './db.provider';

@Module({
  exports: [...DbProviders],
  providers: [...DbProviders],
})
export class DbModule {}
