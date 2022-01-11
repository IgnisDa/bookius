import { useGetAllBooksQuery } from '@bookius/generated';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { client, ssrCache } from '../lib/helpers/urqlClient';

const IndexPage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data }] = useGetAllBooksQuery();
  return (
    <div className="text-black dark:text-white">
      <div>{JSON.stringify(data, null, 4)}</div>
    </div>
  );
};

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
  // This query is used to populate the cache for the query used on this page.
  await client.query(GET_ALL_BOOKS).toPromise();
  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
  };
};

export default IndexPage;
