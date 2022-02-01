import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BookProgressStatus } from '@prisma/client';
import {
  GraphQLBigInt,
  GraphQLNonNegativeFloat,
  GraphQLPositiveInt,
} from 'graphql-scalars';
import { BookDto } from './book.dto';

@ObjectType({
  description:
    "Model to track a user's reading progress with a particular book",
})
export class BookProgressLogDto {
  @Field(() => GraphQLBigInt, {
    description: 'A unique ID associated with this record',
  })
  id: bigint;

  /**
   * The book this is related to
   */
  book: BookDto;

  @Field(() => GraphQLBigInt, {
    description: 'The ID of the book it is associated with',
  })
  bookId: bigint;

  @Field(() => GraphQLNonNegativeFloat, {
    description:
      'Face value, so if a book is 82% complete, this value will be `82.00`',
  })
  percentage: number;

  @Field(() => GraphQLPositiveInt, {
    description: 'The number of pages in this run of reading',
  })
  numPages: number;

  /**
   * The date and time this was first logged
   */
  startedOn: Date;

  /**
   * The date and time this was last updated on
   */
  updatedOn: Date;

  @Field(() => BookProgressStatus, {
    description: 'The human representation of the book progress',
  })
  status: BookProgressStatus;
}

registerEnumType(BookProgressStatus, {
  name: 'BookProgressStatus',
  description: 'The human readable status of reading a book',
  valuesMap: {
    COMPLETED: { description: 'Book is completed' },
    ALMOST_COMPLETED: { description: 'Book is more than 90% complete' },
    HALFWAY_THROUGH: { description: 'Book is more than 50% complete' },
    INTO_IT: { description: 'Book is more than 10% complete' },
    STARTED: { description: 'Book is less than 10% complete' },
  },
});
