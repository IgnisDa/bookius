import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Critical details about a user of the service' })
export class UserDto {
  @Field(() => ID, {
    description: 'The primary key of the user',
  })
  id: string;
}
