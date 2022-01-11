import {
  GetBooksForSearchPageQuery,
  GetBooksForSearchPageQueryVariables,
  useGetBooksForSearchPageQuery,
} from '@bookius/generated';
import {
  Root as ScrollAreaRoot,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import truncate from 'lodash/truncate';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withQuery } from 'ufo';
import { BookItemComponent } from '../components/pages/search/BookItem';
import { GET_BOOKS_FOR_SEARCH_PAGE } from '../graphql/queries';
import { client, ssrCache } from '../lib/helpers/urqlClient';
import voidImage from '../public/images/void.svg';

const Search = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter();
  const q = router.query.q;
  const startIndex = parseInt((router.query.startIndex as string) || '0');

  const [{ data: getBooksForSearchPageQueryData }] =
    useGetBooksForSearchPageQuery({
      variables: {
        input: {
          query: decodeURIComponent(q as string) as string,
          startIndex: startIndex,
        },
      },
    });

  return (
    <div className="flex flex-col items-center h-full space-y-10 md:py-10 lg:pt-32">
      <div>
        <h1 className="text-3xl md:text-4xl">
          <span className="text-base-100 dark:text-gray-300">
            Searching for
          </span>{' '}
          <span className="text-purple-600 dark:text-accent-lime-green">
            {truncate(decodeURIComponent(q as string), {
              length: 20,
              separator: '',
              omission: '...',
            })}
          </span>
        </h1>
      </div>
      {getBooksForSearchPageQueryData?.booksSearch?.length! > 0 ? (
        <ScrollAreaRoot className="flex w-full mx-5 md:w-11/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 3xl:w-4/5 md:justify-center md:items-center">
          <ScrollAreaViewport className="w-full h-[600px] md:h-[500px] mr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-10">
              {getBooksForSearchPageQueryData?.booksSearch.map(
                (book, index) => (
                  <BookItemComponent book={book} key={index} />
                )
              )}
            </div>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar
            orientation="vertical"
            className="flex w-2 transition-colors bg-gray-200 rounded-lg hover:bg-gray-400 "
          >
            <ScrollAreaThumb className="flex-1 bg-purple-500 rounded-lg" />
          </ScrollAreaScrollbar>
          <ScrollAreaCorner />
        </ScrollAreaRoot>
      ) : (
        <div className="p-3 border border-gray-400 rounded-lg dark:border-base-200">
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
            <h1 className="mt-4 text-2xl text-center dark:text-error text-rose-600">
              No search results found!
            </h1>
          </div>
        </div>
      )}
      <div className="flex justify-around w-full pt-8 text-center sm:btn-group sm:block">
        <Link
          href={withQuery('search', {
            q: q,
            startIndex: (startIndex - 10).toString(),
          })}
        >
          <a
            className={clsx(
              'btn sm:btn-wide btn-outline',
              startIndex === 0
                ? 'dark:btn-disabled btn-ghost text-base-200 pointer-events-none'
                : 'bg-slate-700 dark:bg-opacity-0'
            )}
          >
            Previous Page
          </a>
        </Link>
        <Link
          href={withQuery('search', {
            q: q,
            startIndex: (startIndex + 10).toString(),
          })}
        >
          <a
            className={clsx(
              'btn sm:btn-wide btn-outline',
              !getBooksForSearchPageQueryData
                ? 'dark:btn-disabled btn-ghost text-base-200 pointer-events-none'
                : 'bg-slate-700 dark:bg-opacity-0'
            )}
          >
            Next Page
          </a>
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const decodedQuery = decodeURIComponent(query.q as string);
  const startIndex = parseInt((query.startIndex as string) || '0');

  await client
    .query<GetBooksForSearchPageQuery, GetBooksForSearchPageQueryVariables>(
      GET_BOOKS_FOR_SEARCH_PAGE,
      {
        input: {
          query: decodedQuery,
          startIndex: startIndex,
        },
      }
    )
    .toPromise();

  return { props: { urqlState: ssrCache.extractData() } };
};

export default Search;
