import {
  useGetUserRelatedAuthorsQuery,
  useGetUserRelatedBooksQuery,
} from '@bookius/generated';
import { Button, Flex, styled, theme as t } from '@bookius/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import { MyBooksComponent } from '../components/pages/dashboard/MyBooks';
import { PopularAuthorsComponent } from '../components/pages/dashboard/PopularAuthors';
import {
  GET_USER_RELATED_AUTHORS,
  GET_USER_RELATED_BOOKS,
} from '../graphql/queries';
import {
  getFetchOptions,
  getRedirectUnauthenticatedRequests,
  hasRequiredRequestCookies,
} from '../lib/helpers/getAuthOptions';
import { client, ssrCache } from '../lib/helpers/urqlClient';

const VerticalStack = styled(Flex, {
  width: '100%',
  spaceY: t.space[8],
  '@xl': { width: '90%' },
  '@2xl': { width: '75%' },
});

const Dashboard = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data: userRelatedBooksData }] = useGetUserRelatedBooksQuery();
  const [{ data: userRelatedAuthorsData }] = useGetUserRelatedAuthorsQuery();

  return (
    <>
      <VerticalStack direction={'column'}>
        <MyBooksComponent books={userRelatedBooksData!} />
        <PopularAuthorsComponent authors={userRelatedAuthorsData!} />
      </VerticalStack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!hasRequiredRequestCookies(req))
    return getRedirectUnauthenticatedRequests();
  await client
    .query(GET_USER_RELATED_BOOKS, undefined, {
      requestPolicy: 'network-only',
      ...getFetchOptions(req),
    })
    .toPromise();
  await client
    .query(GET_USER_RELATED_AUTHORS, undefined, {
      requestPolicy: 'network-only',
      ...getFetchOptions(req),
    })
    .toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default Dashboard;
