import { OpenLibraryWorkDto } from '@bookius/generated';
import clsx from 'clsx';
import truncate from 'lodash.truncate';
import NextImage from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import noBookImage from '../../../public/images/no-book.png';

type BookItemComponentProps = { book: OpenLibraryWorkDto };

export const BookItemComponent: FC<BookItemComponentProps> = ({ book }) => {
  const [imageSize, setImageSize] = useState('L');
  const [isImageAvailable, setIsImageAvailable] = useState(true);

  const trueKey = book.key.split('/').at(-1);

  return (
    <div id={`book-id-${trueKey}`} className="flex items-center space-x-5">
      <div className="flex h-[200px] w-[130px] flex-none items-center justify-center md:h-[250px] md:w-[150px]">
        <NextImage
          id={book.coverI ? `book-image-${book.coverI}` : undefined}
          src={
            book.coverI && isImageAvailable
              ? `https://covers.openlibrary.org/b/id/${book.coverI}-${imageSize}.jpg?default=false`
              : noBookImage
          }
          onError={() => {
            switch (imageSize) {
              case 'L':
                setImageSize('M');
                break;
              case 'M':
                setImageSize('S');
              case 'S':
                setIsImageAvailable(false);
              default:
                break;
            }
          }}
          alt={
            isImageAvailable
              ? `Image for '${book.title}'`
              : `No image for ${book.title}`
          }
          height={book.coverI ? 250 : 180}
          width={book.coverI ? 150 : 150}
          className="rounded-xl"
          layout="intrinsic"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-5">
        <div>
          <Link
            href={
              book.editionKey.length > 0
                ? {
                    pathname: `/book`,
                    query: {
                      k: book.editionKey,
                      focused: book.editionKey.at(0),
                    },
                  }
                : '#'
            }
          >
            <a
              className={clsx(
                'text-2xl font-semibold text-secondary  decoration-dashed hover:underline md:no-underline',
                book.editionKey.length === 0
                  ? 'pointer-events-none'
                  : 'underline'
              )}
            >
              {truncate(book.title, {
                length: 30,
                omission: '...',
              })}
            </a>
          </Link>{' '}
          {book.authorName && book.authorName.length > 0 && (
            <div>
              <span className="text-primary-content">by</span>{' '}
              <span className="text-lg text-warning">
                {book.authorName.at(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="inline text-gray-400">Editions:</p>{' '}
          <p className="inline text-lg font-semibold text-gray-200">
            {book.editionKey?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};
