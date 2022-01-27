import {
  GetBookDetailsByOlidQuery,
  GetBookDetailsByOlidQueryVariables,
  useGetBookDetailsByOlidQuery,
} from '@bookius/generated';
import { Tab } from '@headlessui/react';
import { ContinueReadingComponent } from 'apps/site/components/pages/book/ContinueReading';
import { DetailsDisplayComponent } from 'apps/site/components/pages/book/DetailsDisplay';
import { ImageDisplayComponent } from 'apps/site/components/pages/book/ImageDisplay';
import clsx from 'clsx';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { GET_BOOK_DETAILS_BY_OLID_FROM_OPEN_LIBRARY } from '../../graphql/queries';
import { client, ssrCache } from '../../lib/helpers/urqlClient';
import ufoImage from '../../public/images/ufo.svg';

const tabs = [{ name: 'Description' }, { name: 'Continue reading' }];

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
            <div className="flex flex-col items-center space-y-10 md:items-stretch md:flex-row md:space-x-10 md:space-y-0">
              <ImageDisplayComponent book={data.bookDetailsByOlid} />
              <div className="flex flex-col justify-between flex-grow w-full md:pt-6 sm:max-w-md md:max-w-none">
                <Tab.Group>
                  <Tab.Panels>
                    <Tab.Panel>
                      <DetailsDisplayComponent book={data.bookDetailsByOlid} />
                    </Tab.Panel>
                    <Tab.Panel>
                      <ContinueReadingComponent book={data.bookDetailsByOlid} />
                    </Tab.Panel>
                  </Tab.Panels>
                  <Tab.List className="flex p-1 mt-5 space-x-1 bg-blue-900/10 rounded-xl">
                    {tabs.map((tab, index) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          clsx(
                            'w-full py-2.5 leading-5 font-medium text-blue-700 capitalize',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
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
