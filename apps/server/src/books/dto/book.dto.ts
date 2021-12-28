import { Field, ObjectType } from '@nestjs/graphql';
import { ArchitectDto } from './architect.dto';

@ObjectType({
  description: 'A book that is available to be viewed by the user',
})
export class BookDto {
  @Field(() => BigInt, {
    description: 'The primary key of the book',
  })
  id: BigInt;

  /** The date and time when this book was added to the service */
  createdAt: Date;

  /** The date and time when information about this book was last updated */
  updatedAt: Date;

  /** Name of the book */
  title: string;

  @Field(() => [ArchitectDto])
  architects: ArchitectDto[];

  /** A brief description of the author */
  description?: string;
}
