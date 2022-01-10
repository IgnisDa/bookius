import { logger } from '@bookius/general';
import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import axios from 'axios';
import { sampleSize } from 'lodash';
import { withQuery } from 'ufo';
import { ApplicationConfig } from '../config';
import { BooksSearchInput } from './dto/books-search.input';
import { FilterBooksArgs } from './dto/filter-books.dto';
import { GoogleBooksVolumeDto } from './dto/google-books.dto';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly applicationConfig: ApplicationConfig
  ) {}

  async filterBooks(args: FilterBooksArgs) {
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

  async booksSearch(input: BooksSearchInput) {
    const gBooksEndpoint = withQuery(
      `${this.applicationConfig.GOOGLE_BOOKS_API_URL}/volumes`,
      {
        q: decodeURIComponent(input.query as string),
        maxResults: '10',
        startIndex: input.startIndex ? input.startIndex.toString() : '0',
      }
    );
    // logger.info(`Sending request to "${gBooksEndpoint}"`);
    try {
      const { data } = await axios.get<{
        kind: string;
        items: GoogleBooksVolumeDto;
        totalItems: number;
      }>(gBooksEndpoint);
      // logger.info(
      //   `Total "${
      //     data.totalItems
      //   }" items present of which "${10}" will be returned`
      // );
      return data.items || []; // return an empty list if there are no books in the response
    } catch (e) {
      logger.error(e.response.data);
      if (e.response.data.error.code == 400) {
        return [];
      }
    }
  }
}
