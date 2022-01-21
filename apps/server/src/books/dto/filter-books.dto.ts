import { FindManyBookArgs } from '@bookius/generated/prisma-nestjs-graphql';
import { ArgsType, PickType } from '@nestjs/graphql';

@ArgsType()
export class FilterBooksArgs extends PickType(FindManyBookArgs, [
  'take',
] as const) {}
