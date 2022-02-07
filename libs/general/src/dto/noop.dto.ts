import { Field, InterfaceType } from '@nestjs/graphql';
import { GraphQLNoop } from '../scalars';

@InterfaceType({
  description: 'A noop type which means absolutely nothing',
})
export abstract class NoopDto {
  @Field(() => GraphQLNoop, {
    description: 'This has no meaning',
  })
  noop?: number;
}
