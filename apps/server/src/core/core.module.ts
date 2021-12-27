import { BigIntScalar } from '@bookius/general';
import { Module } from '@nestjs/common';
import { CoreResolver } from './core.resolver';
import { CoreService } from './core.service';

@Module({
  providers: [CoreResolver, CoreService, BigIntScalar],
})
export class CoreModule {}
