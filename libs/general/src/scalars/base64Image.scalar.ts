import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

const validate = (value: any) => {
  if (typeof value !== 'string') {
    throw new TypeError(`Value is not string: ${value}`);
  }
  // FIXME: Very naive implementation, but it works 🤷
  if (value.startsWith('data')) {
    return value;
  }
  throw new TypeError(`Value is not a valid Base64 image string: ${value}`);
};

export const GraphQLBase64Image = new GraphQLScalarType({
  name: `Base64Image`,
  description: `A field whose value is a Base64 image string: https://en.wikipedia.org/wiki/Base64.`,
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING)
      throw new GraphQLError(
        `Can only validate strings as Base64 but got a: ${ast.kind}`
      );
    return validate(ast.value);
  },
  extensions: { codegenScalarType: 'string' },
});
