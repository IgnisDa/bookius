import { FindManyBookArgs } from 'generated/src/lib/prisma-nestjs-graphql';
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class FilterBooksArgs extends FindManyBookArgs {}
