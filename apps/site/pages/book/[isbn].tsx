import {
  GetBookDetailsFromOpenLibraryQuery,
  GetBookDetailsFromOpenLibraryQueryVariables,
  useGetBookDetailsFromOpenLibraryQuery,
} from '@bookius/generated';
import { DetailsDisplayComponent } from 'apps/site/components/pages/book/DetailsDisplay';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { GET_BOOK_DETAILS_FROM_OPEN_LIBRARY } from '../../graphql/queries';
import { client, ssrCache } from '../../lib/helpers/urqlClient';
import ufoImage from '../../public/images/ufo.svg';

const BookDetailPage = ({
  isbn,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [{ data }] = useGetBookDetailsFromOpenLibraryQuery({
    variables: { isbn },
  });

  return (
    <div className="flex-grow px-3 mb-auto md:my-auto md:max-w-6xl">
      {data?.openLibraryWorkDetails.__typename === 'BooksSearchError' ? (
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-2xl text-2xl text-black lg:text-4xl 2xl:text-5xl dark:text-white">
            {data.openLibraryWorkDetails.message}
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
          {data?.openLibraryWorkDetails && (
            <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-10">
              <DetailsDisplayComponent book={data.openLibraryWorkDetails} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const isbn = params!.isbn as string;
  await client
    .query<
      GetBookDetailsFromOpenLibraryQuery,
      GetBookDetailsFromOpenLibraryQueryVariables
    >(GET_BOOK_DETAILS_FROM_OPEN_LIBRARY, { isbn })
    .toPromise();
  return { props: { urqlState: ssrCache.extractData(), isbn: isbn } };
};

export default BookDetailPage;
