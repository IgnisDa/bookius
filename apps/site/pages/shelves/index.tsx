import { useGetUserShelvesShortQuery } from '@bookius/generated';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { GET_USER_SHELVES_SHORT } from '../../graphql/queries';
import {
  getFetchOptions,
  getRedirectUnauthenticatedRequests,
  hasRequiredRequestCookies,
} from '../../lib/helpers/getAuthOptions';
import { client, ssrCache } from '../../lib/helpers/urqlClient';

const ShelvesIndex = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [{ data }, executeGetUserShelvesShortQuery] =
    useGetUserShelvesShortQuery();

  const refreshShelves = async () =>
    executeGetUserShelvesShortQuery({ requestPolicy: 'network-only' });

  return (
    <>
      {/* <CreateShelfButton refreshShelves={refreshShelves} /> */}
      <div>{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}</div>
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  if (!hasRequiredRequestCookies(req))
    return getRedirectUnauthenticatedRequests();

  await client
    .query(GET_USER_SHELVES_SHORT, undefined, getFetchOptions(req))
    .toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
};

export default ShelvesIndex;
