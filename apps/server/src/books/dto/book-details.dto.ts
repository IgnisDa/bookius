import { APIError } from '@bookius/general';
import { createUnionType, ObjectType } from '@nestjs/graphql';
import { BookDto } from './book.dto';

@ObjectType({
  description:
    'The object returned when there is an error getting details about a book',
  implements: () => APIError,
})
export class BooksDetailsError implements APIError {
  /**
   * The error encountered while executing this query
   */
  message: string;
}

export const BooksDetailsResultUnion = createUnionType({
  name: 'BooksDetailsResultUnion',
  types: () => [BooksDetailsError, BookDto],
  description:
    'The result returned when a client tries to get details about a particular book',
});
