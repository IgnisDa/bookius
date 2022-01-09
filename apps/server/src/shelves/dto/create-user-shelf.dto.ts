import { ShelfCreateInput as GeneratedShelfCreateInput } from 'generated/src/lib/prisma-nestjs-graphql';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class CreateUserShelfInput extends PickType(GeneratedShelfCreateInput, [
  'name',
  'description',
  'isPublic',
]) {}
