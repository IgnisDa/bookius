import { APIError } from '@bookius/general';
import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from './user.dto';

@ObjectType({
  description: 'The type returned on successful login',
})
export class LoginResult {
  @Field({
    description: 'The user this login result is associated with',
  })
  user: UserDto;

  @Field({
    description: 'Wether the login attempt was successful',
  })
  status: boolean;
}

@ObjectType({
  description: 'The type returned for the errors when login is unsuccessful',
  implements: () => APIError,
})
export class LoginError extends APIError {
  @Field({
    description: 'The error message corresponding to this login attempt',
  })
  message: string;
}

export const LoginResultUnion = createUnionType({
  name: 'LoginResultUnion',
  types: () => [LoginResult, LoginError],
  description: 'Result type returned as the result when someone tries to login',
});
