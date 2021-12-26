import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from './user.dto';

@ObjectType({
  description: 'Type returned for the error when a new user is created.',
})
export class CreateUserError {
  @Field({
    description: 'General errors relating to the registration attempt',
    nullable: true,
  })
  message?: string;
}

export const CreateUserResultUnion = createUnionType({
  name: 'CreateUserResultUnion',
  types: () => [CreateUserError, UserDto],
  description: 'Result type returned as the result when new user is created.',
});
