import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import {
  getRedirectUnauthenticatedRequests,
  hasRequiredRequestCookies,
} from '../../lib/helpers/getAuthOptions';

const ShelvesIndex = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      <div>
        <h1>All shelves</h1>
      </div>
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  if (!hasRequiredRequestCookies(req))
    return getRedirectUnauthenticatedRequests();

  return { props: {} };
};

export default ShelvesIndex;
