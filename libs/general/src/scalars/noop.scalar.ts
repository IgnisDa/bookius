import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

const validate = (value: any) => {
  if (value !== 1)
    throw new GraphQLError(
      `Only value allowed for noop field is 1 but got ${value}`
    );
  return value;
};

export const GraphQLNoop = new GraphQLScalarType({
  name: 'Noop',
  description: `A field whose value holds absolutely no meaning`,
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral(ast) {
    if (ast.kind !== Kind.INT)
      throw new GraphQLError(
        `A noop field can have only value as 1 but got a type ${ast.kind}`
      );
    return validate(ast.value);
  },
  extensions: { codegenScalarType: 'number' },
});
