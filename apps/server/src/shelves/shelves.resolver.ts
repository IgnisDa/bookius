import { ListFilterArgs } from '@bookius/general';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import {
  AddBookToShelfError,
  AddBookToShelfInput,
  AddBookToShelfResult,
  AddBookToShelfResultUnion,
} from './dto/add-book-to-shelf.dto';
import { CreateUserShelfInput } from './dto/create-user-shelf.dto';
import {
  RemoveBookToShelfResultUnion,
  RemoveBookToShelfInput,
  RemoveBookToShelfResult,
  RemoveBookToShelfError,
} from './dto/remove-book-to-shelf.dto';
import { ShelfDto } from './dto/shelf.dto';
import { ShelvesService } from './shelves.service';

@Resolver()
export class ShelvesResolver {
  constructor(private readonly shelvesService: ShelvesService) {}

  /* QUERIES */

  @UseGuards(GqlAuthGuard)
  @Query(() => [ShelfDto], {
    description: 'Get a list of all shelves created by this user.',
  })
  async getUserShelves(
    @CurrentUser() currentUser: User,
    @Args() args: ListFilterArgs
  ) {
    return await this.shelvesService.getUserShelves(currentUser, args);
  }

  /* MUTATIONS */

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShelfDto, {
    description: 'Create a shelf for the current user.',
  })
  async createUserShelf(
    @Args('input') input: CreateUserShelfInput,
    @CurrentUser() currentUser: User
  ) {
    return await this.shelvesService.createUserShelf(currentUser, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => AddBookToShelfResultUnion, {
    description: 'Add a book to a shelf for the current user.',
  })
  async addBookToShelf(
    @Args('input') input: AddBookToShelfInput,
    @CurrentUser() currentUser: User
  ) {
    return this.shelvesService
      .addBookToShelf(currentUser, input.bookId, input.shelfId)
      .then(() => ({ __typename: AddBookToShelfResult.name }))
      .catch((resp) => ({ __typename: AddBookToShelfError.name, ...resp }));
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RemoveBookToShelfResultUnion, {
    description: 'Remove a book from a shelf for the current user.',
  })
  async removeBookFromShelf(
    @Args('input') input: RemoveBookToShelfInput,
    @CurrentUser() currentUser: User
  ) {
    return this.shelvesService
      .removeBookFromShelf(currentUser, input.bookId, input.shelfId)
      .then(() => ({ __typename: RemoveBookToShelfResult.name }))
      .catch((resp) => ({ __typename: RemoveBookToShelfError.name, ...resp }));
  }
}
