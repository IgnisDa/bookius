import { BookDetailsFragment } from '@bookius/generated';
import Image from 'next/image';
import { FC } from 'react';
import noBookImage from '../../../public/images/no-book.png';

type DetailsDisplayComponentProps = {
  book: BookDetailsFragment;
};

export const DetailsDisplayComponent: FC<DetailsDisplayComponentProps> = ({
  book,
}) => {
  book;
  const hasCovers = book.bookImages.length > 0;
  const isbn = [];
  if (book.isbn13) isbn.push(book.isbn13);
  if (book.isbn10) isbn.push(book.isbn10);

  return (
    <>
      <div className="relative h-[500px] w-[320px] sm:h-[550px] sm:w-[370px] flex-none lg:h-[700px] lg:w-[450px]">
        <Image
          src={hasCovers ? book.bookImages?.at(0)?.coverUrl! : noBookImage}
          placeholder={hasCovers ? 'blur' : 'empty'}
          blurDataURL={
            hasCovers ? book.bookImages.at(0)?.base64String : undefined
          }
          alt={
            hasCovers
              ? `Image for '${book.title}'`
              : 'No valid book covers found'
          }
          className="rounded-xl"
          layout="fill"
          loading="eager"
        />
      </div>
      <div className="w-full space-y-1 sm:max-w-md md:max-w-none">
        <h1 className="text-4xl font-bold text-left md:text-5xl font-heading text-secondary-content">
          {book.title}
        </h1>
        {book.architects.length > 0 && (
          <h2 className="text-gray-100 ">
            <span className="opacity-75 md:text-lg">by</span>{' '}
            <span className="text-xl underline md:text-2xl">
              {book.architects.map((a) => a.author.name).join(', ')}
            </span>
          </h2>
        )}
        <div className="h-8" />
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
        {book.publishers && (
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
    </>
  );
};
