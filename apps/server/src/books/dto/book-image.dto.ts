import { GraphQLBase64Image } from '@bookius/general';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLURL } from 'graphql-scalars';

@ObjectType({
  description: 'A simple author instance in database',
})
export class BookImageDto {
  @Field(() => GraphQLURL, {
    description: 'A fully qualified url to the book cover',
  })
  coverUrl: string;

  @Field(() => GraphQLBase64Image, {
    description:
      'A base64 encoded string to be used to provide blurred previews',
  })
  base64String: string;
}
