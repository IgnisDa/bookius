import { APIError } from '@bookius/general';
import {
  createUnionType,
  Field,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { OpenLibraryResponse } from './open-library-books.dto';

@InputType({
  description: 'The input type used to search for books',
})
export class BooksSearchInput {
  /**
   * Full-text query string, should be URI **decoded**
   */
  query: string;

  @Field(() => Int, {
    defaultValue: 0,
    description:
      'The position in the collection at which to start the list of results',
  })
  offset: number;
}

@ObjectType({
  description:
    'The object returned when there is an error while performing the search',
  implements: () => APIError,
})
export class BooksSearchError implements APIError {
  /**
   * The error encountered while executing this query
   */
  message: string;
}

export const BooksSearchResultUnion = createUnionType({
  name: 'BooksSearchResultUnion',
  types: () => [BooksSearchError, OpenLibraryResponse],
  description: 'The result returned when a client tries to search for a book',
});
