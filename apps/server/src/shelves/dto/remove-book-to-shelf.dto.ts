import { APIError, NoopDto } from '@bookius/general';
import {
  createUnionType,
  Field,
  ID,
  InputType,
  ObjectType,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { AddBookToShelfInput } from './add-book-to-shelf.dto';

@InputType({
  description: 'The input type to remove a book from a shelf for a user',
})
export class RemoveBookToShelfInput extends AddBookToShelfInput {
  @Field(() => GraphQLBigInt, {
    description: 'The ID of the book that would get removed from the shelf',
  })
  bookId: bigint;

  @Field(() => ID, {
    description: 'The ID of the shelf to which the book will get removed from',
  })
  shelfId: string;
}

@ObjectType({
  description:
    'The return type when a book has been removed from a shelf successfully',
  implements: () => NoopDto,
})
export class RemoveBookToShelfResult implements NoopDto {}

@ObjectType({
  description: 'The return type when a book can not be removed from a shelf',
  implements: () => APIError,
})
export class RemoveBookToShelfError implements APIError {
  /**
   * The message explaining what went wrong
   */
  message: string;
}

export const RemoveBookToShelfResultUnion = createUnionType({
  name: 'RemoveBookToShelfResultUnion',
  types: () => [RemoveBookToShelfResult, RemoveBookToShelfError],
  description: 'The type returned when a book is added to a shelf',
});
