import { OpenLibraryCollector } from '@bookius/data';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MODULE_QUEUE_NAME } from './books.constants';
import { BookProcessor } from './books.processor';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: MODULE_QUEUE_NAME,
    }),
  ],
  providers: [BooksResolver, BooksService, BookProcessor, OpenLibraryCollector],
})
export class BooksModule {}
