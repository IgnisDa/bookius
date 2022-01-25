import { OpenLibraryApi } from '../apis/open-library.api';
import { BaseCollector, ICollector } from './base.collector';

export class OpenLibraryCollector extends BaseCollector implements ICollector {
  /**
   * Find a book from the Open library API by it's OLID, along with data about its author.
   */
  async findBookByOlidFromAPI(olid: string) {
    const api = new OpenLibraryApi(this.configService);
    const bookUrl = `${this.configService.OPEN_LIBRARY_API_URL}/work/${olid}.json`;
    return await api.getBookDetailsFromAPI(bookUrl);
  }

  /**
   * Find a book from the Open library API by it's ISBN, along with data about its author.
   */
  async findBookByIsbnFromAPI(isbn: string) {
    const api = new OpenLibraryApi(this.configService);
    const bookUrl = `${this.configService.OPEN_LIBRARY_API_URL}/isbn/${isbn}.json`;
    return await api.getBookDetailsFromAPI(bookUrl);
  }

  /**
   * Search in the Open Library API by a search querystring
   */
  async bookSearch(query: string, offset: number) {
    const api = new OpenLibraryApi(this.configService);
    return await api.bookSearch(query, offset);
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

  /**
   * Find a book from the Open library API by it's key, along with data about it's author.
   */
  async findBookByKeyFromDatabase(key: string) {
    const book = await this.prisma.book.findFirst({
      where: { openLibraryKey: key },
      include: {
        architects: { include: { author: true } },
        bookImages: true,
      },
    });
    if (!book) return undefined;
    return this.bookBuilderFromBookModel(book);
  }

  /**
   * This searches for the book with this open library key in the database. If not found,
   * tries to find it from the Open Library API. If found, saves it to the database and
   * returns the book details otherwise returns `undefined`.
   */
  async getBookByOlid(key: string) {
    const dbBook = await this.findBookByKeyFromDatabase(key);
    if (dbBook) return dbBook;
    else {
      const apiBook = await this.findBookByOlidFromAPI(key);
      if (apiBook) {
        const book = this.saveBookToDatabase(apiBook);
        return book;
      }
      return undefined;
    }
  }
}
