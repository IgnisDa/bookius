import { GetUserRelatedBooksQuery } from '@bookius/generated';
import { clampNumberOfLines, Icon } from '@bookius/ui';
import clsx from 'clsx';
import NextImage from 'next/image';
import { FunctionComponent } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import noData from '../../../public/images/no-data-2.svg';
import { MoreButton } from '../../miscellaneous/MoreButton';

type MyBooksComponentProps = {
  books: GetUserRelatedBooksQuery;
};

export const MyBooksComponent: FunctionComponent<MyBooksComponentProps> = ({
  books,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-4xl font-bold text-accent">
          My Books
        </h1>
        <MoreButton href="/books" />
      </div>
      {books.userRelatedBooks.length > 0 ? (
        <div className="mt-4 flex flex-col space-y-6 lg:flex-row lg:space-x-5 lg:space-y-0">
          {books.userRelatedBooks.slice(0, 3).map((book, index) => (
            <div
              className={clsx(
                'flex flex-1 items-center space-x-5 rounded-xl p-3 shadow-sm',
                index === 0 && 'bg-blue-500',
                index === 1 && 'bg-purple-600',
                index === 2 && 'bg-green-600'
              )}
              key={index}
            >
              <div className="h-40 w-24 flex-none">
                <NextImage
                  src={`https://picsum.photos/seed/${book?.id}/400`}
                  width={'96px'}
                  height={'160px'}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="my-4 flex flex-col justify-around space-y-3">
                <h1
                  className={clsx(
                    clampNumberOfLines(2).className,
                    'font-sans text-lg font-bold leading-tight text-gray-900'
                  )}
                >
                  {book?.title}
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
          <p className="text-center text-primary-content">
            You have not started reading any books yet.
          </p>
        </div>
      )}
    </>
  );
};
