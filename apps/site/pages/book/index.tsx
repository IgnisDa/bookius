import {
  GetBookDetailsByOlidQuery,
  GetBookDetailsByOlidQueryVariables,
  useGetBookDetailsByOlidQuery,
} from '@bookius/generated';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ContinueReadingComponent } from '../../components/pages/book/ContinueReading';
import { DetailsDisplayComponent } from '../../components/pages/book/DetailsDisplay';
import { ImageDisplayComponent } from '../../components/pages/book/ImageDisplay';
import { GET_BOOK_DETAILS_BY_OLID_FROM_OPEN_LIBRARY } from '../../graphql/queries';
import { client, ssrCache } from '../../lib/helpers/urqlClient';
import ufoImage from '../../public/images/ufo.svg';

const tabs = [
  { name: 'Description' },
  { name: 'Continue reading', disableIfNotLoggedIn: true },
];

const BookDetailPage = ({
  olid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [{ data }] = useGetBookDetailsByOlidQuery({
    variables: { key: olid },
  });

  return (
    <div className="mb-auto flex-grow px-3 md:my-auto md:max-w-6xl">
      {data?.bookDetailsByOlid.__typename === 'BooksDetailsError' ? (
        <>
          <Head>
            <title>Book not found</title>
          </Head>
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
        </>
      ) : (
        <>
          <Head>
            <title>{data?.bookDetailsByOlid.title}</title>
          </Head>
          {data?.bookDetailsByOlid && (
            <div className="flex flex-col items-center space-y-10 md:flex-row md:items-stretch md:space-x-10 md:space-y-0">
              <ImageDisplayComponent book={data.bookDetailsByOlid} />
              <div className="flex w-full flex-grow flex-col-reverse sm:max-w-md md:max-w-none md:flex-col md:pt-6">
                <Tab.Group>
                  <Tab.Panels className="mt-8 flex flex-1 md:mt-0">
                    <Tab.Panel className="flex flex-1 items-center">
                      <DetailsDisplayComponent book={data.bookDetailsByOlid} />
                    </Tab.Panel>
                    <Tab.Panel className="flex flex-1 items-center">
                      <ContinueReadingComponent book={data.bookDetailsByOlid} />
                    </Tab.Panel>
                  </Tab.Panels>
                  <Tab.List className="flex flex-none space-x-1 rounded-xl bg-blue-900/10 p-1 md:mt-5">
                    {tabs.map((tab, index) => (
                      <Tab
                        key={index}
                        className={({ selected }) =>
                          clsx(
                            'w-full py-2.5 font-medium capitalize leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                              ? 'bg-white shadow'
                              : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                            index === tabs.length - 1 && 'rounded-r-lg',
                            index === 0 && 'rounded-l-lg'
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </Tab.Group>
              </div>
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
