import { Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [BookDto], {
    description: 'Get a list of all books',
  })
  async books() {
    return await this.booksService.books();
  }
}
