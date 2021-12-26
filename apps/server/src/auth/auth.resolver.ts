import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  /* QUERIES */

  @Query(() => Boolean, {
    description:
      'Check whether a user with the given issuer exists in the database.',
  })
  async checkUserByIssuer(@Args('issuer') issuer: string) {
    return await this.authService.checkUserByIssuer(issuer);
  }

  /* MUTATIONS */

  @Mutation(() => CreateUserResultUnion, {
    description:
      'Mutation to create a new user with a given authentication token.',
  })
  async createUser(@Args('issuer') issuer: string) {
    return this.authService
      .createUser(issuer)
      .then((resp) => ({ __typename: UserDto.name, ...resp }))
      .catch((resp) => ({
        __typename: CreateUserError.name,
        ...resp,
      }));
  }

  @Mutation(() => LoginResultUnion, {
    description: 'Login using an authentication token.',
  })
  async loginUser(@Args('issuer') issuer: string) {
    return this.authService
      .loginUser(issuer)
      .then((resp) => ({ __typename: LoginResult.name, ...resp }))
      .catch((resp) => ({ __typename: LoginError.name, ...resp }));
  }
}
