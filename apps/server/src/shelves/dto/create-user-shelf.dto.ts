import { InputType } from '@nestjs/graphql';

@InputType({
  description: 'The input type to create a new shelf for a user',
})
export class CreateUserShelfInput {
  /**
   * Name of the new shelf
   */
  name: string;

  /**
   * A description associated with this shelf
   */
  description?: string;

  /**
   * Wether this shelf will be publicly available to others. A public shelf can be viewed
   * by anyone.
   */
  isPublic?: boolean;
}
