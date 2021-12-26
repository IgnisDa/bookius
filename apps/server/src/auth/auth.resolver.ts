import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  CreateUserResultUnion,
  CreateUserError,
} from './dto/create-user.result';
import {
  LoginResultUnion,
  LoginResult,
  LoginError,
} from './dto/login-user.result';
import { UserDto } from './dto/user.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  /* MUTATIONS */

  @Mutation(() => CreateUserResultUnion, {
    description:
      'Mutation to create a new user with a given authentication token.',
  })
  async createUser(@Args('DIDToken') DIDToken: string) {
    return this.authService
      .createUser(DIDToken)
      .then((resp) => ({ __typename: UserDto.name, ...resp }))
      .catch((resp) => ({
        __typename: CreateUserError.name,
        ...resp,
      }));
  }

  @Mutation(() => LoginResultUnion, {
    description: 'Login using an authentication token.',
  })
  async loginUser(@Args('DIDToken') DIDToken: string) {
    return this.authService
      .loginUser(DIDToken)
      .then((resp) => ({ __typename: LoginResult.name, ...resp }))
      .catch((resp) => ({ __typename: LoginError.name, ...resp }));
  }
}
