import { FindManyBookArgs } from '@bookius/generated/prisma-nestjs-graphql';
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class FilterBooksArgs extends FindManyBookArgs {}
