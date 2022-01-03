import { FindManyShelfArgs } from '@bookius/generated/prisma-nestjs-graphql';
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class FilterUserShelvesArgs extends FindManyShelfArgs {}
