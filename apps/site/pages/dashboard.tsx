import {
  useGetUserBooksProgressLogsQuery,
  useGetUserRelatedAuthorsQuery,
  useGetUserRelatedBooksQuery,
} from '@bookius/generated';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ChangeEvent, useState } from 'react';
import { KeepReadingComponent } from '../components/pages/dashboard/KeepReading';
import { MyBooksComponent } from '../components/pages/dashboard/MyBooks';
import { SearchInputComponent } from '../components/pages/dashboard/SearchInput';
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

const Dashboard = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data: userRelatedBooksData }] = useGetUserRelatedBooksQuery();
  const [{ data: userRelatedAuthorsData }] = useGetUserRelatedAuthorsQuery();
  const [{ data: useGetUserBooksProgressLogsData }] =
    useGetUserBooksProgressLogsQuery({ variables: { take: 5 } });

  const [search, setSearch] = useState('');

  const updateSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <div className="flex w-full max-w-5xl flex-none flex-col space-y-8 lg:flex-col">
      <div>
        <SearchInputComponent search={search} updateSearch={updateSearch} />
      </div>
      <div>
        <MyBooksComponent books={userRelatedBooksData!} />
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-start lg:space-x-5 lg:space-y-0">
        <YourAuthorsComponent authors={userRelatedAuthorsData!} />
        <KeepReadingComponent logs={useGetUserBooksProgressLogsData!} />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  req,
  resolvedUrl,
}: GetServerSidePropsContext) => {
  if (!hasRequiredRequestCookies(req))
    return getRedirectUnauthenticatedRequests({ from: resolvedUrl });
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
