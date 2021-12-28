import { Field, ID, ObjectType, OmitType } from '@nestjs/graphql';
import { BookDto } from '../../books/dto/book.dto';

@ObjectType({
  description: 'Details about a book without their architect details',
})
export class BookDtoWithoutArchitect extends OmitType(BookDto, [
  'architects',
] as const) {}

@ObjectType({
  description: 'Counts of various statistics related to shelves',
})
export class ShelfCountDto {
  /** The number of books in this shelf */
  books: number;
}

@ObjectType({
  description: 'A shelf that is created by a user',
})
export class ShelfDto {
  @Field(() => ID, {
    description: 'Unique identifier for the shelf',
  })
  id: string;

  /** Name of the shelf */
  name: string;

  /** A brief description about the shelf and what is contains */
  description?: string;

  /** The date and time when this shelf was created */
  createdAt: Date;

  /** The date and time when information about this shelf was last updated */
  updatedAt: Date;

  /** Whether the shelf is visible to other users */
  isPublic: boolean;

  @Field(() => [BookDtoWithoutArchitect], {
    description: 'The books that are contained in this shelf',
  })
  books: BookDtoWithoutArchitect[];

  /** Counts of various statistics related to shelves */
  _count: ShelfCountDto;
}
