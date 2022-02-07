import { APIError, NoopDto } from '@bookius/general';
import {
  createUnionType,
  Field,
  ID,
  InputType,
  ObjectType,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType({
  description: 'The input type to add a book to a shelf for a user',
})
export class AddBookToShelfInput {
  @Field(() => GraphQLBigInt, {
    description: 'The ID of the book that would get added to the shelf',
  })
  bookId: bigint;

  @Field(() => ID, {
    description: 'The ID of the shelf to which the book will get added to',
  })
  shelfId: string;
}

@ObjectType({
  description:
    'The return type when a book has been added to the shelf successfully',
  implements: () => NoopDto,
})
export class AddBookToShelfResult implements NoopDto {}

@ObjectType({
  description: 'The return type when a book can not be added to a shelf',
  implements: () => APIError,
})
export class AddBookToShelfError implements APIError {
  /**
   * The message explaining what went wrong
   */
  message: string;
}

export const AddBookToShelfResultUnion = createUnionType({
  name: 'AddBookToShelfResultUnion',
  types: () => [AddBookToShelfResult, AddBookToShelfError],
  description: 'The type returned when a book is added to a shelf',
});
