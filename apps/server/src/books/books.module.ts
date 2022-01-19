import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { BookProcessor } from './books.processor';
import { BullModule } from '@nestjs/bull';
import { MODULE_QUEUE_NAME } from './books.constants';

@Module({
  imports: [
    BullModule.registerQueue({
      name: MODULE_QUEUE_NAME,
    }),
  ],
  providers: [BooksResolver, BooksService, BookProcessor],
})
export class BooksModule {}
