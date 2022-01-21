import axios from 'axios';
import { zip } from 'lodash';
import { getPlaiceholder } from 'plaiceholder';
import { TBookBuilder } from '.';
import { BaseCollector, ICollector } from './base.collector';

export class OpenLibraryCollector extends BaseCollector implements ICollector {
  /**
   * Find a book from the Open library API by it's ISBN, along with data about it's author.
   */
  async findBookByIsbnFromAPI(isbn: string) {
    try {
      const bookUrl = `${this.configService.OPEN_LIBRARY_API_URL}/isbn/${isbn}.json`;
      const { data: book } = await axios.get(bookUrl);
      const authors = [];
      if (book.authors) {
        for (const author of book.authors) {
          {
            const authorUrl = `${this.configService.OPEN_LIBRARY_API_URL}/${author.key}.json`;
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
        `${this.configService.OPEN_LIBRARY_COVER_API_URL}/id/${coverId}-${size}.jpg?default=false`;
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
      const constructedBook: TBookBuilder = {
        title: book.title,
        description: book.description,
        isbn10: book.isbn_10.length > 0 ? book.isbn_10[0] : null,
        isbn13: book.isbn_13.length > 0 ? book.isbn_13[0] : null,
        openLibraryKey: book.key.split('/').at(-1),
        authors: book.authors.map((e: any) => ({
          name: e.name,
          key: e.key.split('/').at(-1),
        })),
        bookImages: zip(book.covers, book.blurImageBase64Strings).map(
          ([i, e]: any) => ({
            coverUrl: i,
            base64String: e,
          })
        ),
      };
      return constructedBook;
    } catch {
      return undefined;
    }
  }

  /**
   * This searches for the book with this ISBN in the database. If not found, tries to find
   * it from the Open Library API. If found, saves it to the database and returns the book
   * details otherwise returns `undefined`.
   */
  async getBookByIsbn(isbn: string) {
    const dbBook = await this.findBookByIsbnFromDatabase(isbn);
    if (dbBook) return dbBook;
    else {
      const apiBook = await this.findBookByIsbnFromAPI(isbn);
      if (apiBook) {
        const book = this.saveBookToDatabase(apiBook);
        return book;
      }
      return undefined;
    }
  }
}
