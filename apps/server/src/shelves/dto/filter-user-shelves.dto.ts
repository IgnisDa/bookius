import { FindManyShelfArgs } from '@bookius/generated/prisma-nestjs-graphql';
import { ArgsType, PickType } from '@nestjs/graphql';

@ArgsType()
export class FilterUserShelvesArgs extends PickType(FindManyShelfArgs, [
  'take',
] as const) {}
