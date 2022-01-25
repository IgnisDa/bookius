import {
  GetBookDetailsByOlidQuery,
  GetBookDetailsByOlidQueryVariables,
  useGetBookDetailsByOlidQuery,
} from '@bookius/generated';
import { DetailsDisplayComponent } from 'apps/site/components/pages/book/DetailsDisplay';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { GET_BOOK_DETAILS_BY_OLID_FROM_OPEN_LIBRARY } from '../../graphql/queries';
import { client, ssrCache } from '../../lib/helpers/urqlClient';
import ufoImage from '../../public/images/ufo.svg';

const BookDetailPage = ({
  olid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [{ data }] = useGetBookDetailsByOlidQuery({
    variables: { key: olid },
  });

  return (
    <div className="flex-grow px-3 mb-auto md:my-auto md:max-w-6xl">
      {data?.bookDetailsByOlid.__typename === 'BooksDetailsError' ? (
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-2xl text-2xl text-white lg:text-4xl 2xl:text-5xl">
            {data.bookDetailsByOlid.message}
          </h1>
          <div className="flex items-center justify-center">
            <Image
              src={ufoImage}
              alt={`Book was not found`}
              height={400}
              width={500}
              layout="intrinsic"
              priority
            />
          </div>
        </div>
      ) : (
        <>
          {data?.bookDetailsByOlid && (
            <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-10">
              <DetailsDisplayComponent book={data.bookDetailsByOlid} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  let olid = query.focused as string;
  if (!olid)
    return {
      props: { urqlState: ssrCache.extractData(), olid: '' },
      notFound: true,
    };
  await client
    .query<GetBookDetailsByOlidQuery, GetBookDetailsByOlidQueryVariables>(
      GET_BOOK_DETAILS_BY_OLID_FROM_OPEN_LIBRARY,
      { key: olid }
    )
    .toPromise();
  return {
    props: { urqlState: ssrCache.extractData(), olid: olid },
  };
};

export default BookDetailPage;
