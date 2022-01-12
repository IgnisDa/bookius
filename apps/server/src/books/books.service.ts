import { camelCaseKeys } from '@bookius/general';
import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import axios from 'axios';
import { sampleSize } from 'lodash';
import { withQuery } from 'ufo';
import { ApplicationConfig } from '../config';
import { BooksSearchInput } from './dto/books-search.dto';
import { FilterBooksArgs } from './dto/filter-books.dto';

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

  async openLibraryBooksSearch(input: BooksSearchInput) {
    const openLibraryEndpoint = withQuery(
      `${this.applicationConfig.OPEN_LIBRARY_API_URL}/search.json`,
      {
        q: decodeURIComponent(input.query as string),
        fields: [
          'title',
          'key',
          'isbn',
          'author_name',
          'cover_i',
          'language',
        ].join(','),
        offset: input.offset ? input.offset.toString() : '0',
        limit: '10',
      }
    );
    try {
      const { data } = await axios.get(openLibraryEndpoint);
      return camelCaseKeys(data);
    } catch (e) {
      console.error(e);
      return Promise.reject({
        message: 'The Open Library API did not respond as expected',
      });
    }
  }
}
