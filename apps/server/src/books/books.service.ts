import { camelCaseKeys } from '@bookius/general';
import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import axios from 'axios';
import { sampleSize } from 'lodash';
import { getPlaiceholder } from 'plaiceholder';
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
    try {
      const { data } = await axios.get(
        `${this.applicationConfig.OPEN_LIBRARY_API_URL}/search.json`,
        {
          params: {
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
          },
        }
      );
      return camelCaseKeys(data);
    } catch (e) {
      console.error(e);
      return Promise.reject({
        message: 'The Open Library API did not respond as expected',
      });
    }
  }

  // This code is horribly written and will break at the first chance it gets, but oh well
  // I tried didn't I?
  async openLibraryWorkDetails(possibleIsbn: string[]) {
    for (const isbn of possibleIsbn) {
      const bookUrl = `${this.applicationConfig.OPEN_LIBRARY_API_URL}/isbn/${isbn}.json`;
      try {
        const { data: book } = await axios.get(bookUrl);
        const authors = [];
        if (book.authors) {
          for (const author of book.authors) {
            {
              const authorUrl = `${this.applicationConfig.OPEN_LIBRARY_API_URL}/${author.key}.json`;
              const { data: authorDetails } = await axios.get(authorUrl);
              authors.push({
                key: authorDetails.key,
                name: authorDetails.name,
              });
            }
          }
        }
        book.authors = authors;
        const getImageUrl = (coverId: number, size: string) =>
          `${this.applicationConfig.OPEN_LIBRARY_COVER_API_URL}/id/${coverId}-${size}.jpg?default=false`;
        const covers = [];
        const blurImageBase64Strings = [];
        if (book.covers)
          for (const coverId of book.covers) {
            covers.push(getImageUrl(coverId, 'L'));
            blurImageBase64Strings.push(
              (await getPlaiceholder(getImageUrl(coverId, 'L'))).base64
            );
          }
        book.covers = covers;
        book.blurImageBase64Strings = blurImageBase64Strings;
        return camelCaseKeys(book);
      } catch (e) {
        continue;
      }
    }
    const length = possibleIsbn.length > 1;
    return Promise.reject({
      message: `The Open Library API does not have a record with ${
        length ? 'these' : 'this'
      } ISBN${length ? 's' : ''}`,
    });
  }
}
