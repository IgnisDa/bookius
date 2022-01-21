import { Field, ObjectType } from '@nestjs/graphql';
import {
  GraphQLBigInt,
  GraphQLNonNegativeFloat,
  GraphQLNonNegativeInt,
} from 'graphql-scalars';

@ObjectType({
  description:
    "Model to track a user's reading progress with a particular book",
})
export class BookProgressLogDto {
  @Field(() => GraphQLBigInt, {
    description: 'A unique ID associated with this record',
  })
  id: bigint;

  @Field(() => GraphQLBigInt, {
    description: 'The ID of the book it is associated with',
  })
  bookId: bigint;

  @Field(() => GraphQLNonNegativeFloat, {
    description:
      'Face value, so if a book is 82% complete, this value will be `82.00`',
  })
  percentage: number;

  @Field(() => GraphQLNonNegativeInt, {
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
}
