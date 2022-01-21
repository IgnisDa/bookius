import { ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Critical details about a user of the service',
})
export class UserDto {
  /**
   * The unique identifier for this user
   */
  id: string;
}
