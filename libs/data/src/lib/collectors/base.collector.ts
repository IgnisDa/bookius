import { ApplicationConfig } from '@bookius/config';
import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import {
  ArchitectRole,
  ArchitectsOnBooks,
  Author,
  Book,
  BookImage,
} from '@prisma/client';
import { TBookBuilder } from '.';

export interface IBaseCollector {
  findBookByIsbnFromDatabase: (
    isbn: string
  ) => Promise<TBookBuilder | undefined>;
  saveBookToDatabase: (book: TBookBuilder) => void;
}

export interface ICollector {
  findBookByIsbnFromAPI: (isbn: string) => Promise<TBookBuilder | undefined>;
  getBookByIsbn: (isbn: string) => Promise<TBookBuilder | undefined>;
}

type DatabaseBook = Book & {
  bookImages: BookImage[];
  architects: (ArchitectsOnBooks & {
    author: Author;
  })[];
};

@Injectable()
export class BaseCollector implements IBaseCollector {
  constructor(
    public readonly prisma: PrismaService,
    public readonly configService: ApplicationConfig
  ) {}

  /**
   * Creates a usable book instance from a book instance obtained from the database.
   */
  bookBuilderFromBookModel(book: DatabaseBook): TBookBuilder {
    const bookBuilder: TBookBuilder = {
      ...book,
      authors: book.architects.map((a) => ({
        key: a.author.openLibraryKey,
        name: a.author.name,
      })),
      bookImages: book.bookImages.map((i) => ({
        base64String: i.base64String,
        coverUrl: i.coverUrl,
      })),
    };
    return bookBuilder;
  }

  /**
   * Find a book from the Open library API by it's ISBN, along with data about it's author.
   */
  async findBookByIsbnFromDatabase(isbn: string) {
    const book = await this.prisma.book.findFirst({
      where: {
        OR: [{ isbn13: { equals: isbn } }, { isbn10: { equals: isbn } }],
      },
      include: {
        architects: { include: { author: true } },
        bookImages: true,
      },
    });
    if (!book) return undefined;
    return this.bookBuilderFromBookModel(book);
  }

  /**
   * Save a book to the database, taking into account pre-existing books and authors
   * records.
   */
  async saveBookToDatabase(book: TBookBuilder) {
    const createdBook = await this.prisma.book.create({
      data: {
        title: book.title,
        openLibraryKey: book.openLibraryKey,
        isbn10: book.isbn10,
        isbn13: book.isbn13,
        bookImages: { create: book.bookImages },
      },
    });
    for (const apiAuthor of book.authors) {
      const maybeAuthor = await this.prisma.author.findUnique({
        where: { openLibraryKey: apiAuthor.key },
      });
      let author: Author;
      if (!maybeAuthor)
        author = await this.prisma.author.create({
          data: { name: apiAuthor.name, openLibraryKey: apiAuthor.key },
        });
      else author = maybeAuthor;
      await this.prisma.architectsOnBooks.create({
        data: {
          role: ArchitectRole.AUTHOR,
          authorId: author.id,
          bookId: createdBook.id,
        },
      });
    }
    const updatedBook = await this.prisma.book.findUnique({
      where: { id: createdBook.id },
      include: {
        architects: { include: { author: true } },
        bookImages: true,
      },
    });
    return this.bookBuilderFromBookModel(updatedBook!);
  }
}
