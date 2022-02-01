import { ApplicationConfig } from '@bookius/config';
import axios from 'axios';
import { getPlaiceholder } from 'plaiceholder';
import { TBookBuilder } from '../collectors';
import { zip } from 'lodash';
import { camelCaseKeys } from '@bookius/general';

export class OpenLibraryApi {
  constructor(public readonly configService: ApplicationConfig) {}

  /**
   * Search in the Open Library API by a search querystring
   */
  async bookSearch(query: string, offset: number) {
    try {
      const { data } = await axios.get(
        `${this.configService.OPEN_LIBRARY_API_URL}/search.json`,
        {
          params: {
            q: decodeURIComponent(query as string),
            fields: [
              'title',
              'key',
              'isbn',
              'author_name',
              'cover_i',
              'language',
              'edition_key',
            ].join(','),
            offset: offset ? offset.toString() : '0',
            limit: '10',
          },
        }
      );
      return camelCaseKeys(data);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * Find a book from the Open library API by it's OLID, along with data about its author.
   */
  async getBookDetailsFromAPI(bookUrl: string) {
    try {
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
        description: book.description?.value || null,
        isbn10: book.isbn_10?.length > 0 ? book.isbn_10[0] : null,
        isbn13: book.isbn_13?.length > 0 ? book.isbn_13[0] : null,
        openLibraryKeys: [book.key.split('/').at(-1)],
        publishDate: book.publish_date,
        publishers: book.publishers?.length > 0 ? book.publishers : null,
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
}
