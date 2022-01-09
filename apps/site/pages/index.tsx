import { useGetAllBooksQuery } from 'generated';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { GET_ALL_BOOKS } from '../graphql/queries';
import { client, ssrCache } from '../lib/helpers/urqlClient';

const Index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data }] = useGetAllBooksQuery();
  return (
    <div>
      {data?.filterBooks.map((book, index) => (
        <p key={index}>{JSON.stringify(book, null, 4)}</p>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  // This query is used to populate the cache for the query used on this page.
  await client.query(GET_ALL_BOOKS).toPromise();
  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
  };
};

export default Index;
