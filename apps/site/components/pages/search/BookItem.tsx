import { OpenLibraryWorkDto } from '@bookius/generated';
import truncate from 'lodash/truncate';
import NextImage from 'next/image';
import { FC, useState } from 'react';
import noBookImage from '../../../public/images/no-book.png';

type BookItemComponentProps = { book: OpenLibraryWorkDto };

export const BookItemComponent: FC<BookItemComponentProps> = ({ book }) => {
  const [imageSize, setImageSize] = useState('L');
  const [isImageAvailable, setIsImageAvailable] = useState(true);

  return (
    <div id={`book-id-${book.key}`} className="flex items-center space-x-5">
      <div className="h-[200px] w-[130px] md:h-[250px] md:w-[150px] flex-none flex items-center justify-center">
        <NextImage
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
              ? `${book.title} image`
              : `No image for ${book.title}`
          }
          height={book.coverI ? 250 : 180}
          width={book.coverI ? 150 : 150}
          className="rounded-xl"
          layout="intrinsic"
        />
      </div>
      <div className="flex flex-col flex-1 space-y-5">
        <div>
          <p>
            <span className="text-2xl font-semibold text-primary dark:text-secondary">
              {truncate(book.title, {
                length: 30,
                omission: '...',
              })}
            </span>{' '}
            {book.authorName && book.authorName.length > 0 && (
              <>
                <span className="text-base-100 dark:text-primary-content">
                  by
                </span>{' '}
                <span className="text-lg text-secondary dark:text-warning">
                  {book.authorName!.at(0)}
                </span>
              </>
            )}
          </p>
        </div>
        {book.isbn && (
          <div>
            <span className="text-gray-600 dark:text-gray-400">ISBNs:</span>
            {book.isbn?.slice(0, 3).map((identifier, identifierIndex) => (
              <>
                <p key={identifierIndex} className="text-xs">
                  <span className="font-semibold text-gray-900 dark:text-gray-200 dark:font-normal">
                    {identifier}
                  </span>
                </p>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
