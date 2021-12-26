import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';

const isServerSide = typeof window === 'undefined';
export const ssrCache = ssrExchange({ isClient: !isServerSide });
export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_API,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});
