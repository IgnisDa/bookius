import { Module } from '@nestjs/common';
import { CoreResolver } from './core.resolver';
import { CoreService } from './core.service';

@Module({
  providers: [CoreResolver, CoreService],
})
export class CoreModule {}
