import {
  GetBooksForSearchPageQuery,
  GetBooksForSearchPageQueryVariables,
  OpenLibraryResponse,
  useGetBooksForSearchPageQuery,
} from '@bookius/generated';
import clsx from 'clsx';
import truncate from 'lodash.truncate';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BookItemComponent } from '../components/pages/search/BookItem';
import { SearchPageInputComponent } from '../components/pages/search/SearchPageInput';
import { GET_BOOKS_FOR_SEARCH_PAGE } from '../graphql/queries';
import { client, ssrCache } from '../lib/helpers/urqlClient';
import voidImage from '../public/images/void.svg';

const Search = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter();
  const q = router.query.q as string;
  const offset = parseInt((router.query.offset as string) || '0');

  const [{ data: getBooksForSearchPageQueryData }] =
    useGetBooksForSearchPageQuery({
      variables: {
        input: {
          query: decodeURIComponent(q) as string,
          offset: offset,
        },
      },
    });

  const response =
    getBooksForSearchPageQueryData?.openLibraryBooksSearch as OpenLibraryResponse;

  return response ? (
    <div className="flex h-full flex-col items-center space-y-20 md:py-10 lg:pt-20">
      <div className="w-full max-w-lg">
        <SearchPageInputComponent />
      </div>
      <div>
        <h1 className="text-center text-3xl md:text-4xl">
          <span className="text-gray-300">Searching for</span>{' '}
          <span className=" text-accent-lime-green">
            {truncate(decodeURIComponent(q as string), {
              length: 20,
              separator: '',
              omission: '...',
            })}
          </span>
        </h1>
        <div className="text-center md:text-left">
          <span className="text-gray-300 ">Total results:</span>{' '}
          <span className="text-2xl text-success">{response.numFound}</span>
        </div>
      </div>
      {response && response.docs.length > 0 ? (
        <div className="mx-5 grid w-full grid-cols-1 gap-x-16 gap-y-10 md:w-11/12 md:grid-cols-2 md:items-center md:justify-center lg:w-9/12 xl:w-10/12 xl:grid-cols-3 2xl:w-9/12 3xl:w-4/5">
          {response.docs.map((book, index) => (
            <BookItemComponent book={book} key={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-base-200 p-3">
          <div>
            <NextImage
              src={voidImage}
              alt={`No books found`}
              height={'400px'}
              width={'500px'}
              layout="intrinsic"
              priority
            />
          </div>
          <div>
            <h1 className="mt-4 text-center text-2xl text-rose-600">
              No search results found!
            </h1>
          </div>
        </div>
      )}
      <div className="flex w-full justify-around pt-8 text-center sm:btn-group sm:block">
        <Link
          href={`/search?${new URLSearchParams({
            q: q,
            offset: (offset - 10).toString(),
          }).toString()}`}
        >
          <a
            className={clsx(
              'btn-outline btn sm:btn-wide',
              offset === 0
                ? 'btn-disabled btn-ghost pointer-events-none text-base-200'
                : 'bg-slate-700 bg-opacity-0'
            )}
          >
            Previous Page
          </a>
        </Link>
        <Link
          href={`/search?${new URLSearchParams({
            q: q,
            offset: (offset + 10).toString(),
          }).toString()}`}
        >
          <a
            className={clsx(
              'btn-outline btn sm:btn-wide',
              !getBooksForSearchPageQueryData || offset + 10 > response.numFound
                ? 'btn-disabled btn-ghost pointer-events-none text-base-200'
                : 'bg-slate-700 bg-opacity-0'
            )}
          >
            Next Page
          </a>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const decodedQuery = decodeURIComponent(query.q as string);
  const offset = parseInt((query.offset as string) || '0');

  await client
    .query<GetBooksForSearchPageQuery, GetBooksForSearchPageQueryVariables>(
      GET_BOOKS_FOR_SEARCH_PAGE,
      { input: { query: decodedQuery, offset: offset } }
    )
    .toPromise();

  return { props: { urqlState: ssrCache.extractData() } };
};

export default Search;
