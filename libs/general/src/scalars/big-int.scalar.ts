import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('BigInt', (_type) => BigInt)
export class BigIntScalar implements CustomScalar<string, BigInt> {
  description = 'BigInt custom scalar type';

  parseValue(value: string): BigInt {
    return BigInt(value); // value from the client
  }

  serialize(value: BigInt): string {
    return value.toString(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): BigInt | null {
    if (ast.kind === Kind.INT) {
      return BigInt(ast.value);
    }
    return null;
  }
}
