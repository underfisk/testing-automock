import { Injectable } from '@nestjs/common';
import { BarService } from '../bar/bar.service';
import { FooService } from '../foo/foo.service';

@Injectable()
export class JazzService {
  constructor(
    private readonly barService: BarService,
    private readonly fooService: FooService,
  ) {}

  listen() {
    console.log('only method');
  }
}
