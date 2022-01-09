import NextImage from 'next/image';
import { FC, useEffect, useState } from 'react';
import { GET_ALL_BOOKS } from '../../../graphql/queries';
import { client } from '../../../lib/helpers/urqlClient';

type SearchResultComponentProps = {
  search: string;
};

export const SearchResultComponent: FC<SearchResultComponentProps> = ({
  search,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await client
        .query(GET_ALL_BOOKS, { m: search }, { requestPolicy: 'network-only' })
        .toPromise();
      setData(data);
      console.log(data, loading);
      setLoading(false);
      console.log(loading);
    })();
  }, [search]);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-700 font-heading text-base-100 dark:text-accent">
        Search Results
      </h1>
      <div className="h-[400px]">
        {!search && (
          <>
            <NextImage
              src={`/images/searching.svg`}
              height={'400px'}
              width={'400px'}
            />
            <div className="text-center text-base-100">
              Type something to start searching...
            </div>
          </>
        )}
        {loading && <div>{JSON.stringify(data)}</div>}
      </div>
    </div>
  );
};
