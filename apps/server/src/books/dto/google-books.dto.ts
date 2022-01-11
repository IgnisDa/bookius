import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'A volume from the google books API',
})
@Directive(
  '@specifiedBy(url: "https://developers.google.com/books/docs/v1/using#WorkingVolumes")'
)
export class GoogleBooksVolumeDto {
  /**
   * The google books unique ID
   */
  id: string;

  /**
   * Information about this particular book
   */
  volumeInfo: GoogleBooksVolumeInfoDto;
}

@ObjectType({
  description: 'Description about a specific volume',
})
class GoogleBooksVolumeInfoDto {
  /**
   * The name of the book
   */
  title: string;

  /**
   * A list of people who have worked on this book
   */
  authors?: string[];

  /**
   * The publisher of this particular edition
   */
  publisher?: string;

  /**
   * A small description of the book
   */
  description?: string;

  /**
   * Links to images of the book
   */
  imageLinks?: GoogleBooksVolumeImageLinksDto;

  @Field(() => Int, {
    description: 'Number of pages in the book',
  })
  pageCount: number;

  @Field(() => [GoogleBooksIndustryIdentifiersDto], {
    description: 'Global identifiers of this book, like ISBN numbers',
  })
  industryIdentifiers: GoogleBooksIndustryIdentifiersDto[];

  /**
   * A two-letter ISO-639-1 code, such as "en" or "fr"
   */
  language: string;
}

@ObjectType({
  description: 'Images related to a specific volume',
})
class GoogleBooksVolumeImageLinksDto {
  /**
   * A large thumbnail image
   */
  thumbnail: string;
}

@ObjectType({
  description: 'Global identifiers of this book, like ISBN numbers',
})
class GoogleBooksIndustryIdentifiersDto {
  /**
   * Type of identifier (ISBN 10 or 13)
   */
  type: string;

  /**
   * Value of the identifier
   */
  identifier: string;
}
