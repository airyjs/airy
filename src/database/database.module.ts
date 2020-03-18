import { Module } from '@nestjs/common';
import { sqliteProvider } from './sqlite.provider';

@Module({
  providers: [sqliteProvider],
  exports: [sqliteProvider],
})
export class DatabaseModule {}
