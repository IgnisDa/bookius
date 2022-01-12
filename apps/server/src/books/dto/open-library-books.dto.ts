import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description:
    'The response object when communicating with the Open Library API',
})
export class OpenLibraryResponse {
  @Field(() => Int, {
    description: 'Number of results found for the query',
  })
  numFound: number;

  @Field(() => Int, {
    description: 'The offset for the query',
  })
  offset: number;

  @Field(() => [OpenLibraryWorkDto], {
    description: 'The documents returned by the API',
  })
  docs: OpenLibraryWorkDto[];
}

@ObjectType({
  description: 'A volume from the Open Library API',
})
@Directive('@specifiedBy(url: "https://openlibrary.org/dev/docs/api/books")')
export class OpenLibraryWorkDto {
  /**
   * The open library unique ID
   */
  key: string;

  /**
   * Title of the book
   */
  title: string;

  /**
   * Cover image ID for the book
   */
  coverI?: string;

  /**
   * Unique Industry Identifiers for the book
   */
  isbn: string[];

  /**
   * The language the book is written in
   */
  language?: string[];

  /**
   * Names of the author of the book
   */
  authorName?: string[];
}
