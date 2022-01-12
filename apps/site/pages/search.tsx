import {
  GetBooksForSearchPageQuery,
  GetBooksForSearchPageQueryVariables,
  OpenLibraryResponse,
  useGetBooksForSearchPageQuery,
} from '@bookius/generated';
import clsx from 'clsx';
import truncate from 'lodash/truncate';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withQuery } from 'ufo';
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

  // FIXME: this is hardcoded here, **ideally** we should handle the case if the response
  // was unsuccessful
  const response =
    getBooksForSearchPageQueryData?.openLibraryBooksSearch as OpenLibraryResponse;
  // so we will never revisit this piece of code? yeah right

  return (
    <div className="flex flex-col items-center h-full space-y-20 md:py-10 lg:pt-20">
      <div className="w-full max-w-lg">
        <SearchPageInputComponent />
      </div>
      <div>
        <h1 className="text-3xl text-center md:text-4xl">
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
        <div className="text-center md:text-left">
          <span className="text-gray-600 dark:text-gray-300">
            Total results:
          </span>{' '}
          <span className="text-2xl text-black dark:text-success">
            {response.numFound}
          </span>
        </div>
      </div>
      {response && response.docs.length > 0 ? (
        // FIXME: This causes some error only in production mode wherein the page does not render
        // <ScrollArea.Root
        //   type="auto"
        //   className="flex w-full mx-5 md:w-11/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 3xl:w-4/5 md:justify-center md:items-center"
        // >
        //   <ScrollArea.Viewport className="w-full h-[600px] md:h-[500px] mr-4">
        //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-10">
        //       {response.docs.map((book, index) => (
        //         <BookItemComponent book={book} key={index} />
        //       ))}
        //     </div>
        //   </ScrollArea.Viewport>
        //   <ScrollArea.Scrollbar
        //     orientation="vertical"
        //     className="flex w-2 transition-colors bg-gray-200 rounded-lg hover:bg-gray-400 "
        //   >
        //     <ScrollArea.Thumb className="flex-1 bg-purple-500 rounded-lg" />
        //   </ScrollArea.Scrollbar>
        //   <ScrollArea.Corner />
        // </ScrollArea.Root>
        <div className="grid w-full grid-cols-1 mx-5 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-10 md:w-11/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 3xl:w-4/5 md:justify-center md:items-center">
          {response.docs.map((book, index) => (
            <BookItemComponent book={book} key={index} />
          ))}
        </div>
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
          href={withQuery('/search', {
            q: q,
            offset: (offset - 10).toString(),
          })}
        >
          <a
            className={clsx(
              'btn sm:btn-wide btn-outline',
              offset === 0
                ? 'dark:btn-disabled btn-ghost text-base-200 pointer-events-none'
                : 'bg-slate-700 dark:bg-opacity-0'
            )}
          >
            Previous Page
          </a>
        </Link>
        <Link
          href={withQuery('/search', {
            q: q,
            offset: (offset + 10).toString(),
          })}
        >
          <a
            className={clsx(
              'btn sm:btn-wide btn-outline',
              !getBooksForSearchPageQueryData || offset + 10 > response.numFound
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
