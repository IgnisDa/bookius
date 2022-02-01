import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLNonNegativeInt } from 'graphql-scalars';

@ObjectType({
  description:
    'The type returned when statistics about a particular book is requested',
})
export class BookStatisticsDto {
  @Field(() => GraphQLNonNegativeInt, {
    description: 'The number of people who have completed this book',
  })
  readBy: number;

  @Field(() => GraphQLNonNegativeInt, {
    description: 'The number of people who have reviewed this book',
  })
  reviewedBy: number;
}
