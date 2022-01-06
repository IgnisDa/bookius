import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { AUTH_TOKEN_KEY } from '../constants';

type RequestWithCookies = IncomingMessage & { cookies: NextApiRequestCookies };

export const hasRequiredRequestCookies = (req: RequestWithCookies) =>
  !!req.cookies[AUTH_TOKEN_KEY];

export const getRedirectUnauthenticatedRequests = (
  options: {
    destination?: string;
    errorMessage?: string;
  } = {
    destination: '/',
  }
) => ({
  props: {},
  redirect: {
    destination: options.destination,
    statusCode: 307,
  },
});

export const getFetchOptions = (
  req: RequestWithCookies
): { fetchOptions: RequestInit } => ({
  fetchOptions: {
    headers: { authorization: `Bearer ${req.cookies[AUTH_TOKEN_KEY]}` },
  },
});
