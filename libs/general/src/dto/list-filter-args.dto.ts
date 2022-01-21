import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLNonNegativeInt } from 'graphql-scalars';

@ArgsType()
export class ListFilterArgs {
  @Field(() => GraphQLNonNegativeInt, {
    description: 'The number of items to take',
  })
  take: number;
}
