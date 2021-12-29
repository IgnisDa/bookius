import { useGetUserShelvesShortQuery } from '@bookius/generated';
import { Box } from '@chakra-ui/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { CreateShelfButton } from '../../components/pages/shelves/CreateShelfButton';
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
      <CreateShelfButton refreshShelves={refreshShelves} />
      <Box fontSize={5}>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!hasRequiredRequestCookies(req))
    return getRedirectUnauthenticatedRequests();

  await client
    .query(GET_USER_SHELVES_SHORT, undefined, getFetchOptions(req))
    .toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
};

export default ShelvesIndex;
