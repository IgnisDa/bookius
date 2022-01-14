import { OpenLibraryWorkDetailsDto } from '@bookius/generated';
import Image from 'next/image';
import { FC } from 'react';
import noBookImage from '../../../public/images/no-book.png';

type DetailsDisplayComponentProps = {
  book: OpenLibraryWorkDetailsDto;
};

export const DetailsDisplayComponent: FC<DetailsDisplayComponentProps> = ({
  book,
}) => {
  const isbn = [];
  if (book.isbn13) isbn.push(...book.isbn13);
  if (book.isbn10) isbn.push(...book.isbn10);

  return (
    <>
      <div className="relative h-[500px] w-[320px] sm:h-[550px] sm:w-[370px] flex-none lg:h-[700px] lg:w-[450px]">
        <Image
          src={book.covers?.at(0) || noBookImage}
          placeholder={!!book.covers ? 'blur' : 'empty'}
          blurDataURL={
            !!book.blurImageBase64Strings
              ? book.blurImageBase64Strings.at(0)
              : undefined
          }
          alt={
            !!book.covers
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
        {book.authors && (
          <h2 className="text-gray-100 ">
            <span className="opacity-75 md:text-lg">by</span>{' '}
            <span className="text-xl underline md:text-2xl">
              {book.authors.map((a) => a.name).join(', ')}
            </span>
          </h2>
        )}
        <div className="h-8" />
        {book.numberOfPages && (
          <p>
            <span className="text-sm text-gray-500 md:text-base lg:text-lg">
              Pages:
            </span>{' '}
            <span className="font-semibold text-gray-300 md:text-xl lg:text-2xl">
              {book.numberOfPages}
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
      </div>
    </>
  );
};
