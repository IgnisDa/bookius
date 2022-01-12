import {
  Author,
  Book,
  BookProgressLog,
} from '@bookius/generated/prisma-nestjs-graphql';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { BooksService } from './books.service';
import {
  BooksSearchError,
  BooksSearchInput,
  BooksSearchResultUnion,
} from './dto/books-search.dto';
import { FilterBooksArgs } from './dto/filter-books.dto';
import { OpenLibraryResponse } from './dto/open-library-books.dto';
import { UserBookProgressLogsInput } from './dto/user-book-progress-logs.dto';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  /* QUERIES */

  @Query(() => [Book], {
    description: 'Get a filtered list of all books in the service.',
  })
  async filterBooks(@Args() args: FilterBooksArgs) {
    return await this.booksService.filterBooks(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Book], {
    description: 'Get a small list of books that are related to the user.',
  })
  async userRelatedBooks(@CurrentUser() currentUser: User) {
    return await this.booksService.userRelatedBooks(currentUser);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Author], {
    description: 'Get a small list of authors that are related to the user.',
  })
  async userRelatedAuthors(@CurrentUser() currentUser: User) {
    return await this.booksService.userRelatedAuthors(currentUser);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [BookProgressLog], {
    description: 'Get list of book progresses that are related to the user.',
  })
  async userBookProgressLogs(
    @Args() { take }: UserBookProgressLogsInput,
    @CurrentUser() currentUser: User
  ) {
    return await this.booksService.userBookProgressLogs(currentUser, take);
  }

  @Query(() => BooksSearchResultUnion, {
    description:
      'Get a list of books related to a search query from Open Library API.',
  })
  async openLibraryBooksSearch(@Args('input') input: BooksSearchInput) {
    return this.booksService
      .openLibraryBooksSearch(input)
      .then((resp) => ({ __typename: OpenLibraryResponse.name, ...resp }))
      .catch((resp) => ({ __typename: BooksSearchError.name, ...resp }));
  }
}
