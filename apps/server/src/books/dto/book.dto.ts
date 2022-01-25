import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt, GraphQLISBN } from 'graphql-scalars';
import { ArchitectDto } from './architect.dto';
import { BookImageDto } from './book-image.dto';

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
  isbn13?: string;

  @Field(() => GraphQLISBN, {
    description: 'The ISBN-10 unique identifier of this book',
  })
  isbn10?: string;

  @Field(() => [ArchitectDto], {
    description: 'The people involved in the production of this book',
  })
  architects: ArchitectDto[];

  /** A brief description of the author */
  description?: string;

  @Field(() => [BookImageDto], {
    description: 'The images associated with this book',
  })
  bookImages: BookImageDto[];

  /**
   * The publishers of this book
   */
  publishers: string[];

  /**
   * The date when this book was published
   */
  publishDate?: string;
}
