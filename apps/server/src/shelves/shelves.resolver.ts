import { Shelf } from '@bookius/generated/prisma-nestjs-graphql';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CreateUserShelfInput } from './dto/create-user-shelf.dto';
import { FilterUserShelvesArgs } from './dto/filter-user-shelves.dto';
import { ShelvesService } from './shelves.service';

@Resolver()
export class ShelvesResolver {
  constructor(private readonly shelvesService: ShelvesService) {}

  /* QUERIES */

  @UseGuards(GqlAuthGuard)
  @Query(() => [Shelf], {
    description: 'Get a list of all shelves created by this user.',
  })
  async filterUserShelves(
    @CurrentUser() currentUser: User,
    @Args() args: FilterUserShelvesArgs
  ) {
    return await this.shelvesService.filterUserShelves(currentUser, args);
  }

  /* MUTATIONS */

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Shelf, {
    description: 'Create a shelf for the current user.',
  })
  async createUserShelf(
    @Args('input') input: CreateUserShelfInput,
    @CurrentUser() currentUser: User
  ) {
    return await this.shelvesService.createUserShelf(currentUser, input);
  }
}
