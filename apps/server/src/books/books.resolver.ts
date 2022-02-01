import { ListFilterArgs } from '@bookius/general';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { GraphQLBigInt, GraphQLISBN } from 'graphql-scalars';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { BooksService } from './books.service';
import { AuthorDto } from './dto/author.dto';
import {
  BooksDetailsError,
  BooksDetailsResultUnion,
} from './dto/book-details.dto';
import { BookProgressLogDto } from './dto/book-progress-log.dto';
import { BookStatisticsDto } from './dto/book-statistics.dto';
import { BookDto } from './dto/book.dto';
import {
  BooksSearchError,
  BooksSearchInput,
  BooksSearchResultUnion,
} from './dto/books-search.dto';
import {
  CreateBookProgressLogInput as CreateBookProgressLogInput,
  CreateBookProgressLogResult,
} from './dto/create-book-progress-log.dto';
import { OpenLibraryResponse } from './dto/open-library-books.dto';
import { UpdateBookProgressLogInput } from './dto/update-book-progress-log.dto';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  /* QUERIES */

  @Query(() => [BookDto], {
    description: 'Get a filtered list of all books in the service.',
  })
  async filterBooks(@Args() args: ListFilterArgs) {
    return await this.booksService.filterBooks(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [BookDto], {
    description: 'Get a small list of books that are related to the user.',
  })
  async userRelatedBooks(@CurrentUser() currentUser: User) {
    return await this.booksService.userRelatedBooks(currentUser);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [AuthorDto], {
    description: 'Get a small list of authors that are related to the user.',
  })
  async userRelatedAuthors(@CurrentUser() currentUser: User) {
    return await this.booksService.userRelatedAuthors(currentUser);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [BookProgressLogDto], {
    description: 'Get list of book progresses that are related to the user.',
  })
  async userBookProgressLogs(
    @Args() { take }: ListFilterArgs,
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

  @Query(() => BooksDetailsResultUnion, {
    description: "Get details about a particular work by it's ISBN.",
  })
  async bookDetailsByIsbn(
    @Args('isbn', { type: () => GraphQLISBN })
    isbn: string
  ) {
    return this.booksService
      .bookDetailsByIsbn(isbn)
      .then((resp) => ({ __typename: BookDto.name, ...resp }))
      .catch((resp) => ({ __typename: BooksDetailsError.name, ...resp }));
  }

  @Query(() => BooksDetailsResultUnion, {
    description: "Get details about a particular work by it's key.",
  })
  async bookDetailsByOlid(@Args('key') key: string) {
    return this.booksService
      .bookDetailsByOlid(key)
      .then((resp) => ({ __typename: BookDto.name, ...resp }))
      .catch((resp) => ({ __typename: BooksDetailsError.name, ...resp }));
  }

  @Query(() => BookStatisticsDto, {
    description: 'Get statistics about a particular book in the database.',
  })
  async bookStatistics(
    @Args('bookId', { type: () => GraphQLBigInt }) id: bigint
  ) {
    return await this.booksService.bookStatistics(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [BookProgressLogDto], {
    description: 'Get all book progresses for a particular book for the user.',
  })
  async userParticularBookProgressLogs(
    @Args('bookId', { type: () => GraphQLBigInt }) bookId: bigint,
    @CurrentUser() currentUser: User
  ) {
    return await this.booksService.userParticularBookProgressLogs(
      bookId,
      currentUser
    );
  }

  /** MUTATIONS */

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CreateBookProgressLogResult, {
    description:
      'Mark a book as started reading for the currently logged in user.',
  })
  async createBookProgressLog(
    @Args('input') input: CreateBookProgressLogInput,
    @CurrentUser() currentUser: User
  ) {
    return await this.booksService.createBookProgressLog(currentUser, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, {
    description:
      'Update reading progress of a book for the currently logged in user.',
  })
  async updateBookProgressLog(
    @Args('input') input: UpdateBookProgressLogInput
  ) {
    return await this.booksService.updateBookProgressLog(input);
  }
}
