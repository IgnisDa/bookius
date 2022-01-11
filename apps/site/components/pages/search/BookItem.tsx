import { GetBooksForSearchPageQuery } from '@bookius/generated';
import truncate from 'lodash/truncate';
import NextImage from 'next/image';
import { FC } from 'react';
import noBookImage from '../../../public/images/no-book.png';

type BookItemComponentProps = {
  book: GetBooksForSearchPageQuery['booksSearch']['0'];
};

export const BookItemComponent: FC<BookItemComponentProps> = ({ book }) => {
  return (
    <div id={`book-id-${book.id}`} className="flex items-center space-x-5">
      <div className="h-[200px] w-[120px] md:h-[250px] md:w-[150px] flex-none flex items-center justify-center">
        <NextImage
          src={book.volumeInfo.imageLinks?.thumbnail || noBookImage}
          alt={`${book.volumeInfo.title} image`}
          height={book.volumeInfo.imageLinks?.thumbnail ? 250 : 180}
          width={book.volumeInfo.imageLinks?.thumbnail ? 150 : 150}
          className="rounded-xl"
          layout="intrinsic"
        />
      </div>
      <div className="flex flex-col flex-1 space-y-5">
        <div>
          <p>
            <span className="text-2xl font-semibold text-primary dark:text-secondary">
              {truncate(book.volumeInfo.title, {
                length: 30,
                omission: '...',
              })}
            </span>{' '}
            {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 && (
              <>
                <span className="text-base-100 dark:text-primary-content">
                  by
                </span>{' '}
                <span className="text-lg text-secondary dark:text-warning">
                  {book.volumeInfo.authors!.at(0)}
                </span>
              </>
            )}
          </p>
        </div>
        <div>
          {book.volumeInfo.industryIdentifiers.map(
            (identifier, identifierIndex) => (
              <p key={identifierIndex} className="text-xs">
                <span className="text-gray-600 dark:text-gray-400">
                  {identifier.type}:
                </span>{' '}
                <span className="font-semibold text-gray-900 dark:text-gray-200 dark:font-normal">
                  {identifier.identifier}
                </span>
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};
