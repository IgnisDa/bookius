import Cookies from 'js-cookie';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';
import { AUTH_TOKEN_KEY } from '../constants';

const isServerSide = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServerSide });

export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_API as string,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () =>
    isServerSide
      ? {}
      : {
          headers: { authorization: `Bearer ${Cookies.get(AUTH_TOKEN_KEY)}` },
        },
});
