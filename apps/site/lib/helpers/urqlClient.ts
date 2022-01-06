import Cookies from 'js-cookie';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';
import { AUTH_TOKEN_KEY } from '../constants';
import customScalarsExchange from 'urql-custom-scalars-exchange';
import schema from '@bookius/generated/graphql.schema.json';
import { DateTime } from 'luxon';

const scalarsExchange = customScalarsExchange({
  // @ts-ignore
  schema,
  scalars: {
    DateTime: (value: string) => DateTime.fromISO(value),
    Decimal: (value: string) => Number(value),
    BigInt: (value: string) => Number(value),
  },
});

const isServerSide = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServerSide });

export const client = createClient({
  url: isServerSide
    ? process.env.NEXT_SERVER_GRAPHQL_API!
    : process.env.NEXT_PUBLIC_GRAPHQL_API!,
  exchanges: [
    dedupExchange,
    scalarsExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,
  ],
  fetchOptions: () =>
    isServerSide
      ? {}
      : {
          headers: { authorization: `Bearer ${Cookies.get(AUTH_TOKEN_KEY)}` },
        },
});
