import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { BooksService } from './books.service';
import { AuthorDto } from './dto/author.dto';
import { BookDto } from './dto/book.dto';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  /* QUERIES */

  @Query(() => [BookDto], {
    description: 'Get a list of all books in the service.',
  })
  async books() {
    return await this.booksService.books();
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
}
