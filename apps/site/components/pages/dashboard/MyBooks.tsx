import { GetUserRelatedBooksQuery } from '@bookius/generated';
import { clampNumberOfLines, Icon } from '@bookius/ui';
import clsx from 'clsx';
import zip from 'lodash/zip';
import NextImage from 'next/image';
import { FunctionComponent } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { MoreButton } from '../../miscellaneous/MoreButton';
import noData from '../../../public/images/no-data-2.svg';

type MyBooksComponentProps = {
  books: GetUserRelatedBooksQuery;
};

export const MyBooksComponent: FunctionComponent<MyBooksComponentProps> = ({
  books,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-700 font-heading dark:text-accent">
          My Books
        </h1>
        <MoreButton href="/books" />
      </div>
      {books.userRelatedBooks.length > 0 ? (
        <div className="flex flex-col mt-4 space-y-6 lg:flex-row lg:space-x-5 lg:space-y-0">
          {zip(books.userRelatedBooks.slice(0, 3), [
            'bg-accent-light-blue dark:bg-blue-500',
            'bg-accent-purple dark:bg-purple-600',
            'bg-accent-lime-green dark:bg-green-600',
          ]).map(([book, color]) => (
            <div
              className={clsx(
                'flex items-center  flex-1 p-3 space-x-5 shadow-sm rounded-xl',
                color
              )}
              key={book?.id}
            >
              <div className="flex-none w-24 h-40">
                <NextImage
                  src={`https://picsum.photos/seed/${book?.id}/400`}
                  width={'96px'}
                  height={'160px'}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-around my-4 space-y-3">
                <h1
                  className={clsx(
                    clampNumberOfLines(2).className,
                    'font-sans text-lg text-gray-900 font-bold leading-tight'
                  )}
                >
                  {book?.title!}
                </h1>
                <p className="text-gray-800">
                  {book?.architects?.at(0)?.author.name || 'Unknown author'}
                </p>
                <div className="flex space-x-1 text-white">
                  {[...Array(5)].map((_, index) => (
                    <Icon label={index < 4 ? 'filled' : 'unfilled'} key={index}>
                      {index < 4 ? <FaStar /> : <FaRegStar />}
                    </Icon>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-1 md:space-y-5">
          <NextImage
            src={noData}
            height={'240px'}
            width={'300px'}
            className="object-contain"
          />
          <p className="text-center dark:text-gray-400 text-base-100">
            You have not started reading any books yet.
          </p>
        </div>
      )}
    </>
  );
};
