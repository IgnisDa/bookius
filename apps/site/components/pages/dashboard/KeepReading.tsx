import { GetUserBooksProgressLogsQuery } from '@bookius/generated';
import { clampNumberOfLines } from '@bookius/ui';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { ComponentProps, FC, forwardRef } from 'react';
import noData from '../../../public/images/no-data-3.svg';
import { MoreButton } from '../../miscellaneous/MoreButton';
import { ReadingProgress } from './ReadingProgress';

type NextImageWithRefProps = ComponentProps<typeof NextImage>;

const NextImageWithRef = forwardRef<HTMLImageElement, NextImageWithRefProps>(
  (props, _forwardedRef) => <NextImage {...props} />
);

type PopularAuthorsComponentProps = { logs: GetUserBooksProgressLogsQuery };

export const KeepReadingComponent: FC<PopularAuthorsComponentProps> = ({
  logs,
}) => {
  return (
    <div className="flex-shrink rounded-2xl bg-base-200 py-3 shadow-md lg:w-3/5">
      <div className="flex items-center justify-between px-4 py-5 lg:px-6">
        <h1 className="font-heading text-4xl font-bold text-accent">
          Keep Reading
        </h1>
        <MoreButton href="/shelves/reading" />
      </div>
      {logs.userBookProgressLogs.length > 0 ? (
        <div className="flex flex-col">
          {logs.userBookProgressLogs.map((log, index) => {
            const book = log.book;
            const images = book.bookImages?.at(0);
            return (
              <div key={log.id}>
                <div className="flex items-center px-4 py-2 lg:px-6">
                  <Root
                    aria-details={
                      images ? `Image on ${images?.coverUrl}` : 'Fallback image'
                    }
                    className="relative mr-4 inline-flex h-16 w-12 select-none items-center justify-center overflow-hidden rounded-lg bg-black align-middle"
                  >
                    <Image asChild src={images?.coverUrl}>
                      <NextImageWithRef
                        src={images?.coverUrl!}
                        blurDataURL={images?.base64String}
                        className="inset-0 object-cover object-top"
                        width={'48px'}
                        height={'64px'}
                      />
                    </Image>
                    <Fallback
                      delayMs={600}
                      className="flex h-full w-full items-center justify-center bg-white font-semibold text-black"
                    >
                      {book.title
                        .split(' ')
                        .map((i) => i.at(0))
                        .filter(Boolean)
                        .join('')
                        .toUpperCase()}
                    </Fallback>
                  </Root>
                  <div className="flex flex-1 flex-col space-y-2">
                    <div className="flex">
                      <div className="mr-8 space-y-1">
                        <NextLink
                          href={{
                            pathname: `/book`,
                            query: {
                              k: book.openLibraryKeys,
                              focused: book.openLibraryKeys.at(0),
                            },
                          }}
                        >
                          <a
                            className={clsx(
                              clampNumberOfLines(1).className,
                              'text-lg text-gray-200 hover:underline md:no-underline'
                            )}
                          >
                            {book.title}
                          </a>
                        </NextLink>
                        <p className="text-sm text-accent-content">
                          {book?.architects?.at(0)?.author.name || 'Unknown'}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <p className="font-heading text-sm font-semibold text-gray-300">
                          {Math.round((log.percentage * log.numPages) / 100)}/
                          {log.numPages}
                        </p>
                      </div>
                    </div>
                    <ReadingProgress index={index} progress={log.percentage} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-5 p-4">
          <NextImage
            src={noData}
            height={'210px'}
            width={'500px'}
            className="object-contain"
          />
          <p className="text-center text-primary-content">
            You have not started logging your progress. Add a book to the{' '}
            <span className="text-warning">Currently Reading</span> shelf to add
            books here.
          </p>
        </div>
      )}
    </div>
  );
};
