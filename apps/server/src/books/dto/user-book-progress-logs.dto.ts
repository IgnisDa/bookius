import { FindManyBookProgressLogArgs } from 'generated/src/lib/prisma-nestjs-graphql';
import { ArgsType, PickType } from '@nestjs/graphql';

@ArgsType()
export class UserBookProgressLogsInput extends PickType(
  FindManyBookProgressLogArgs,
  ['take'] as const
) {}
