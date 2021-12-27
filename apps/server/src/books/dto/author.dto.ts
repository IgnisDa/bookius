import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'An author that is available to be viewed by the user',
})
export class AuthorDto {
  @Field(() => BigInt, {
    description: 'The primary key of the author',
  })
  id: BigInt;

  /** The date and time when this author was added to the service */
  createdAt: Date;

  /** The date and time when information about this author was last updated */
  updatedAt: Date;

  /** Name of the author */
  name: string;
}
