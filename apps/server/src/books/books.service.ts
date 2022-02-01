import { OpenLibraryCollector } from '@bookius/data';
import { ListFilterArgs, logger } from '@bookius/general';
import { PrismaService } from '@bookius/model';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { BookProgressStatus, User } from '@prisma/client';
import { Queue } from 'bull';
import { sampleSize } from 'lodash';
import { COLLECT_BOOKS_DATA_JOB, MODULE_QUEUE_NAME } from './books.constants';
import { BooksSearchInput } from './dto/books-search.dto';
import { CreateBookProgressLogInput } from './dto/create-book-progress-log.dto';
import { UpdateBookProgressLogInput } from './dto/update-book-progress-log.dto';

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
      ...args,
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

  async bookStatistics(id: bigint) {
    const readBy = await this.prisma.bookProgressLog.count({
      where: { bookId: id, status: BookProgressStatus.COMPLETED },
    });
    // TODO: return correct data here
    const reviewedBy = 69;
    return { readBy, reviewedBy };
  }

  async userParticularBookProgressLogs(bookId: bigint, currentUser: User) {
    const bookProgressLogs = await this.prisma.bookProgressLog.findMany({
      where: { userId: currentUser.id, bookId: bookId },
      orderBy: { updatedOn: 'desc' },
    });
    return bookProgressLogs;
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
    // TODO: This function should take the first key and return data for that, and then
    // deploy a job to collect data from all other keys and store it back into the book
    // record
    const book = await this.openLibraryService.getBookByOlid(key);
    return book
      ? book
      : Promise.reject({
          message: `The Open Library API does not have a record with key='${key}'`,
        });
  }

  async createBookProgressLog(
    currentUser: User,
    input: CreateBookProgressLogInput
  ) {
    const bookProgressLog = await this.prisma.bookProgressLog.create({
      data: {
        numPages: input.numPages,
        bookId: input.bookId,
        userId: currentUser.id,
      },
    });
    return bookProgressLog;
  }

  async updateBookProgressLog(input: UpdateBookProgressLogInput) {
    try {
      const bookProgressLog = await this.prisma.bookProgressLog.update({
        where: { id: input.id },
        data: { percentage: input.percentage },
      });
      return !!bookProgressLog;
    } catch (e) {
      logger.error(e);
      return false;
    }
  }
}
