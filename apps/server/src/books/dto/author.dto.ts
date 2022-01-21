import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType({
  description: 'An author that is available to be viewed by the user',
})
export class AuthorDto {
  @Field(() => GraphQLBigInt, {
    description: 'The primary key of the author',
  })
  id: bigint;

  /** The date and time when this author was added to the service */
  createdAt: Date;

  /** The date and time when information about this author was last updated */
  updatedAt: Date;

  /** Name of the author */
  name: string;

  /** A brief description of the author */
  bio?: string;
}
