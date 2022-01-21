import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLURL, GraphQLBigInt, GraphQLISBN } from 'graphql-scalars';

@ObjectType({
  description: 'A simple author instance in database',
})
class SimplifiedAuthor {
  /**
   * The name of this author
   */
  name: string;

  /**
   * The Open Library unique key for this author
   */
  key: string;
}

@ObjectType({
  description: 'A simple author instance in database',
})
class SimplifiedBookImage {
  @Field(() => GraphQLURL, {
    description: 'A fully qualified url to the book cover',
  })
  coverUrl: string;

  /**
   * A base64 encoded string to be used to provide blurred previews
   */
  base64String: string;
}

@ObjectType({
  description: 'A book that is available to be viewed by the user',
})
export class BookDto {
  @Field(() => GraphQLBigInt, {
    description: 'The primary key of the book',
  })
  id: bigint;

  /** The date and time when this book was added to the service */
  createdAt: Date;

  /** The date and time when information about this book was last updated */
  updatedAt: Date;

  /** Name of the book */
  title: string;

  @Field(() => GraphQLISBN, {
    description: 'The ISBN-13 unique identifier of this book',
  })
  isbn13: string;

  @Field(() => GraphQLISBN, {
    description: 'The ISBN-10 unique identifier of this book',
  })
  isbn10: string;

  @Field(() => [SimplifiedAuthor])
  authors: SimplifiedAuthor[];

  /** A brief description of the author */
  description?: string;

  @Field(() => [SimplifiedBookImage], {
    description: 'The images associated with this book',
  })
  bookImages: SimplifiedBookImage[];
}
