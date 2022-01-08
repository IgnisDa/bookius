import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { AUTH_TOKEN_KEY } from '../constants';
import { withQuery } from 'ufo';

type RequestWithCookies = IncomingMessage & { cookies: NextApiRequestCookies };

export const hasRequiredRequestCookies = (req: RequestWithCookies) =>
  !!req.cookies[AUTH_TOKEN_KEY];

export const getRedirectUnauthenticatedRequests = (
  options: {
    destination?: string;
    errorMessage?: string;
    from?: string;
  } = {}
) => {
  const destinationUrl = options?.destination ? options.destination : '/enlist';
  const queryOptions: Record<string, string> = {
    errorMessage: options?.errorMessage
      ? options.errorMessage
      : 'You need to be logged in to view that page',
  };
  if (options?.from) queryOptions.from = options.from;
  const destination = withQuery(destinationUrl, queryOptions);
  return {
    props: {},
    redirect: {
      destination: destination,
      statusCode: 307,
    },
  };
};

export const getFetchOptions = (
  req: RequestWithCookies
): { fetchOptions: RequestInit } => ({
  fetchOptions: {
    headers: { authorization: `Bearer ${req.cookies[AUTH_TOKEN_KEY]}` },
  },
});
