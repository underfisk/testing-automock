import { BarService } from './domains/bar/bar.service';
import { FooService } from './domains/foo/foo.service';
import { JazzService } from './domains/jazz/jazz.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [BarService, FooService, JazzService],
})
export class AppModule {}
