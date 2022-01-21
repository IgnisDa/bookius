import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ArchitectRole } from '@prisma/client';
import { AuthorDto } from './author.dto';

@ObjectType({
  description: 'The people who have worked on a book',
})
export class ArchitectDto {
  @Field(() => ArchitectRole, {
    description: 'Role of this particular architect',
  })
  role: ArchitectRole;

  /**
   * Details about the author
   */
  author: AuthorDto;
}

registerEnumType(ArchitectRole, {
  name: 'ArchitectRoles',
  description: 'The role of a person in the complete production of a book',
});
