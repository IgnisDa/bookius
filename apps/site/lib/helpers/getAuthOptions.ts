import { HttpStatus } from '@nestjs/common';
import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { AUTH_TOKEN_KEY } from '../constants';

type RequestWithCookies = IncomingMessage & { cookies: NextApiRequestCookies };

export const hasRequiredRequestCookies = (req: RequestWithCookies) =>
  !!req.cookies[AUTH_TOKEN_KEY];

export const getRedirectUnauthenticatedRequests = (
  options: {
    statusCode?: HttpStatus;
    destination?: string;
    errorMessage?: string;
  } = {
    statusCode: HttpStatus.FOUND,
    destination: '/',
    errorMessage: 'You are not authorized to see this page',
  }
) => ({
  props: { errorMessage: options.errorMessage },
  redirect: {
    destination: options.destination,
    statusCode: options.statusCode,
  },
});

export const getFetchOptions = (
  req: RequestWithCookies
): { fetchOptions: RequestInit } => ({
  fetchOptions: {
    headers: { authorization: `Bearer ${req.cookies[AUTH_TOKEN_KEY]}` },
  },
});
