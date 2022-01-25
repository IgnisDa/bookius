import { ApplicationConfig } from '@bookius/config';
import { OpenLibraryCollector } from '@bookius/data';
import { ListFilterArgs } from '@bookius/general';
import { PrismaService } from '@bookius/model';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Queue } from 'bull';
import { sampleSize } from 'lodash';
import { COLLECT_BOOKS_DATA_JOB, MODULE_QUEUE_NAME } from './books.constants';
import { BooksSearchInput } from './dto/books-search.dto';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(MODULE_QUEUE_NAME)
    private readonly serviceQueue: Queue,
    private readonly openLibraryService: OpenLibraryCollector
  ) {}

  async filterBooks(args: ListFilterArgs) {
    const resp = await this.prisma.book.findMany({
      include: { architects: { include: { author: true } } },
      // ...args,
    });
    return resp;
  }

  async userRelatedBooks(currentUser: User) {
    // TODO: Use the `currentUser` to determine some books
    const resp = await this.prisma.book.findMany({
      include: { architects: { select: { role: true, author: true } } },
      take: 10,
    });
    return sampleSize(resp, 5);
  }

  async userRelatedAuthors(currentUser: User) {
    // TODO: Use the `currentUser` to determine some books
    const resp = await this.prisma.author.findMany({ take: 10 });
    return sampleSize(resp, 5);
  }

  async userBookProgressLogs(currentUser: User, take: number) {
    const resp = await this.prisma.bookProgressLog.findMany({
      take: take,
      include: {
        book: { include: { architects: { include: { author: true } } } },
      },
      where: { userId: currentUser.id },
      orderBy: { updatedOn: 'desc' },
    });
    return resp;
  }

  async openLibraryBooksSearch(input: BooksSearchInput) {
    try {
      const resp = await this.openLibraryService.bookSearch(
        input.query,
        input.offset
      );
      return resp;
    } catch {
      return Promise.reject({
        message: 'The Open Library API did not respond as expected',
      });
    }
  }

  async bookDetailsByIsbn(isbn: string) {
    await this.serviceQueue.add(COLLECT_BOOKS_DATA_JOB, { isbn: isbn });
    const book = await this.openLibraryService.getBookByIsbn(isbn);
    return book
      ? book
      : Promise.reject({
          message: `The Open Library API does not have a record with ISBN='${isbn}'`,
        });
  }

  async bookDetailsByOlid(key: string) {
    const book = await this.openLibraryService.getBookByOlid(key);
    return book
      ? book
      : Promise.reject({
          message: `The Open Library API does not have a record with key='${key}'`,
        });
  }
}
