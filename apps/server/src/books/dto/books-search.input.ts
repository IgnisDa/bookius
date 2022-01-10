import { Directive, Field, InputType, Int } from '@nestjs/graphql';

@InputType({
  description: 'The input type used to search for books',
})
@Directive(
  '@specifiedBy(url: "https://developers.google.com/books/docs/v1/using#pagination")'
)
export class BooksSearchInput {
  /**
   * Full-text query string
   */
  query: string;

  @Field(() => Int, {
    defaultValue: 0,
    description:
      'The position in the collection at which to start the list of results',
  })
  startIndex: number;
}
