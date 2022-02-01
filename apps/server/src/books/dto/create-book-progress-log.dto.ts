import { InputType, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { BookProgressLogDto } from './book-progress-log.dto';

@InputType({
  description: 'Input to create a new book progress log instance',
})
export class CreateBookProgressLogInput extends PickType(
  BookProgressLogDto,
  ['numPages', 'bookId'] as const,
  InputType
) {}

@ObjectType({
  description: 'The result if a book progress log creation is successful',
})
export class CreateBookProgressLogResult extends OmitType(BookProgressLogDto, [
  'book',
] as const) {}
