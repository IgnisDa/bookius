import { Field, InputType } from '@nestjs/graphql';

@InputType({
  description: 'The input type used to create a new shelf',
})
export class CreateUserShelfInput {
  /** Name of the new shelf */
  name: string;

  /** A description of the new shelf */
  description?: string;

  @Field({
    description: 'Whether the shelf will be publicly available',
    defaultValue: true,
  })
  isPublic: boolean;
}
