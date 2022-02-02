import { BookDetailsFragment } from '@bookius/generated';
import { FC } from 'react';

type DetailsDisplayComponentProps = {
  book: BookDetailsFragment;
};

export const DetailsDisplayComponent: FC<DetailsDisplayComponentProps> = ({
  book,
}) => {
  const isbn = [];
  if (book.isbn13) isbn.push(book.isbn13);
  if (book.isbn10) isbn.push(book.isbn10);

  return (
    <div>
      <h1 className="text-left font-heading  text-4xl font-bold text-secondary-content  md:text-5xl">
        {book.title}
      </h1>
      {book.architects.length > 0 && (
        <h2 className="text-gray-100 ">
          <span className="opacity-75 md:text-lg">by</span>{' '}
          <span className="text-xl underline md:text-2xl">
            {book.architects.map((ar) => ar.author.name).join(', ')}
          </span>
        </h2>
      )}
      <div className="h-3 sm:h-5 md:h-8" />
      {isbn.length > 0 && (
        <p>
          <span className="text-sm text-gray-500 md:text-base lg:text-lg">
            ISBNs:
          </span>{' '}
          <span className="font-semibold text-gray-300 md:text-xl lg:text-2xl">
            {isbn.join(', ')}
          </span>
        </p>
      )}
      {book.publishDate && (
        <p>
          <span className="text-sm text-gray-500 md:text-base lg:text-lg">
            Published on:
          </span>{' '}
          <span className="font-semibold text-gray-300 md:text-xl lg:text-2xl">
            {book.publishDate}
          </span>
        </p>
      )}
      {book.publishers.length > 0 && (
        <p>
          <span className="text-sm text-gray-500 md:text-base lg:text-lg">
            Published by:
          </span>{' '}
          <span className="font-semibold text-gray-300 md:text-xl lg:text-2xl">
            {book.publishers.join(', ')}
          </span>
        </p>
      )}
    </div>
  );
};
