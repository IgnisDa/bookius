import {
  useGetUserRelatedAuthorsQuery,
  useGetUserRelatedBooksQuery,
} from '@bookius/generated';
import { VStack } from '@chakra-ui/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
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

const Dashboard = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data: userRelatedBooksData }] = useGetUserRelatedBooksQuery();
  const [{ data: userRelatedAuthorsData }] = useGetUserRelatedAuthorsQuery();

  return (
    <VStack
      alignItems="start"
      spacing={20}
      w={{ base: 'full', lg: '90%', xl: '75%', '2xl': '65%' }}
    >
      <MyBooksComponent books={userRelatedBooksData!} />
      <PopularAuthorsComponent authors={userRelatedAuthorsData!} />
    </VStack>
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
