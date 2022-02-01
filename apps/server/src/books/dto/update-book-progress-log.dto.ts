import { InputType, PickType } from '@nestjs/graphql';
import { BookProgressLogDto } from './book-progress-log.dto';

@InputType({
  description: 'Input to update a new book progress log instance',
})
export class UpdateBookProgressLogInput extends PickType(
  BookProgressLogDto,
  ['id', 'percentage'] as const,
  InputType
) {}
