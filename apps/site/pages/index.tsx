import { GetStaticProps } from 'next';
import { GET_STATUS } from '../graphql/queries';
import { getSsrUrqlClient } from '../helpers/getUrqlClient';
import { withNoAuthUrqlClient } from '../helpers/withAppUrqlClient';

export const Index = () => {
  return <div className="text-5xl">Hello world!</div>;
};

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const { client, ssrCache } = getSsrUrqlClient();

  // This query is used to populate the cache for the query
  // used on this page.
  await client.query(GET_STATUS).toPromise();

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
    revalidate: 600,
  };
};

export default withNoAuthUrqlClient(Index);
