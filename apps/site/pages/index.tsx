// import { useGetStatusQuery } from '@bookius/generated';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
// import { GET_STATUS } from '../graphql/queries';
// import { getSsrUrqlClient } from '../lib/helpers/getUrqlClient';
// import { withNoAuthUrqlClient } from '../lib/helpers/withAppUrqlClient';

const Index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { client, ssrCache } = getSsrUrqlClient();
  // // logger.info(ctx.req.cookies);

  // // This query is used to populate the cache for the query
  // // used on this page.
  // await client
  //   .query(GET_STATUS, null, {
  //     fetchOptions: { headers: { authorization: ctx.req.cookies.name } },
  //   })
  //   .toPromise();

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      // urqlState: ssrCache.extractData(),
    },
  };
};

export default Index;
