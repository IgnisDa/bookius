import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({
  description:
    'The standard interface that contains the error message when something goes wrong',
})
export abstract class APIError {
  @Field({
    description: 'The error message giving details about what went wrong',
  })
  message: string;
}
