import {
  useGetUserBooksProgressLogsQuery,
  useGetUserRelatedAuthorsQuery,
  useGetUserRelatedBooksQuery,
} from '@bookius/generated';
import { Flex, styled, theme as t } from '@bookius/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { KeepReadingComponent } from '../components/pages/dashboard/KeepReading';
import { MyBooksComponent } from '../components/pages/dashboard/MyBooks';
import { YourAuthorsComponent } from '../components/pages/dashboard/YourAuthors';
import {
  GET_USER_BOOKS_PROGRESS_LOGS,
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
  const [{ data: useGetUserBooksProgressLogsData }] =
    useGetUserBooksProgressLogsQuery({ variables: { take: 5 } });

  return (
    <>
      <VerticalStack direction={'column'}>
        <MyBooksComponent books={userRelatedBooksData!} />
        <Flex
          direction={{
            '@initial': 'column',
            '@lg': 'row',
          }}
          css={{
            spaceY: t.space[8],
            '@lg': { spaceX: t.space[5], spaceY: t.space[0] },
          }}
        >
          <YourAuthorsComponent authors={userRelatedAuthorsData!} />
          <KeepReadingComponent logs={useGetUserBooksProgressLogsData!} />
        </Flex>
      </VerticalStack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!hasRequiredRequestCookies(req))
    return getRedirectUnauthenticatedRequests();
  await client
    .query(GET_USER_RELATED_BOOKS, undefined, getFetchOptions(req))
    .toPromise();
  await client
    .query(GET_USER_RELATED_AUTHORS, undefined, getFetchOptions(req))
    .toPromise();
  await client
    .query(GET_USER_BOOKS_PROGRESS_LOGS, { take: 5 }, getFetchOptions(req))
    .toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default Dashboard;
