import { User as GeneratedUser } from 'generated/src/lib/prisma-nestjs-graphql';
import { ObjectType, PickType } from '@nestjs/graphql';

@ObjectType({
  description: 'Critical details about a user of the service',
})
export class UserDto extends PickType(GeneratedUser, ['id'] as const) {}
