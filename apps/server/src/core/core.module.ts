import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';

@Module({
  providers: [CoreService],
  controllers: [CoreController],
})
export class CoreModule {}
