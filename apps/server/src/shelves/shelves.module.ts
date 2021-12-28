import { Module } from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { ShelvesResolver } from './shelves.resolver';

@Module({
  providers: [ShelvesResolver, ShelvesService],
})
export class ShelvesModule {}
