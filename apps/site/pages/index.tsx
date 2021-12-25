import { useGetStatusQuery } from '@bookius/generated';
import { InferGetServerSidePropsType } from 'next';
import { GET_STATUS } from '../graphql/queries';
import { getSsrUrqlClient } from '../helpers/getUrqlClient';
import { withNoAuthUrqlClient } from '../helpers/withAppUrqlClient';

const Index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data }] = useGetStatusQuery();
  return (
    <div>
      <div>Hello</div>
      <div>{JSON.stringify(data.getStatus)}</div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { client, ssrCache } = getSsrUrqlClient();

  // This query is used to populate the cache for the query
  // used on this page.
  await client.query(GET_STATUS).toPromise();

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withNoAuthUrqlClient(Index);
