import { ShelfCreateInput as GeneratedShelfCreateInput } from '@bookius/generated/prisma-nestjs-graphql';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class CreateUserShelfInput extends PickType(GeneratedShelfCreateInput, [
  'name',
  'description',
  'isPublic',
]) {}
