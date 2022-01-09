import {
  useGetUserBooksProgressLogsQuery,
  useGetUserRelatedAuthorsQuery,
  useGetUserRelatedBooksQuery,
} from 'generated';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { KeepReadingComponent } from '../components/pages/dashboard/KeepReading';
import { MyBooksComponent } from '../components/pages/dashboard/MyBooks';
import { SearchComponent } from '../components/pages/dashboard/Search';
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

  return (
    <>
      <div className="flex flex-col lg:flex-col w-full space-y-8 xl:w-[90%] 2xl:w-[75%] 3xl:w-[70%]">
        <div>
          <SearchComponent />
        </div>
        <div>
          <MyBooksComponent books={userRelatedBooksData!} />
        </div>
        <div className="flex flex-col space-y-8 lg:space-x-5 lg:flex-row lg: lg:space-y-0">
          <YourAuthorsComponent authors={userRelatedAuthorsData!} />
          <KeepReadingComponent logs={useGetUserBooksProgressLogsData!} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  resolvedUrl,
}) => {
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
