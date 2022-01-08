import { GetUserBooksProgressLogsQuery } from '@bookius/generated';
import { clampNumberOfLines } from '@bookius/ui';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import NextImage from 'next/image';
import { FunctionComponent } from 'react';
import { MoreButton } from '../../miscellaneous/MoreButton';
import { ReadingProgress } from './ReadingProgress';

type PopularAuthorsComponentProps = {
  logs: GetUserBooksProgressLogsQuery;
};

export const KeepReadingComponent: FunctionComponent<
  PopularAuthorsComponentProps
> = ({ logs }) => {
  return (
    <div className="py-3 bg-white shadow-md rounded-2xl lg:w-3/5">
      <div className="flex items-center justify-between px-4 py-5 lg:px-6">
        <h1 className="text-4xl font-bold dark:text-gray-700 font-heading">
          Keep Reading
        </h1>
        <MoreButton href="/shelves/reading" />
      </div>
      {logs.userBookProgressLogs.length > 0 ? (
        <div className="flex flex-col">
          {logs.userBookProgressLogs.map((log, index) => (
            <div key={log.id}>
              <div className="flex items-center px-4 py-2 lg:px-6">
                <Root className="inline-flex items-center justify-center w-12 h-16 mr-4 overflow-hidden align-middle bg-black rounded-lg select-none">
                  <Image
                    className="object-cover w-full h-full"
                    src={`https://picsum.photos/seed/${log.id}/200`}
                  />
                  <Fallback
                    delayMs={600}
                    className="flex items-center justify-center w-full h-full font-semibold text-black bg-white"
                  >
                    {log.book.title}
                  </Fallback>
                </Root>
                <div className="flex flex-col flex-1 space-y-2">
                  <div className="flex">
                    <div className="mr-8 space-y-1">
                      <p
                        className={clsx(
                          clampNumberOfLines(1).className,
                          'text-lg dark:text-gray-700'
                        )}
                      >
                        {log.book.title}
                      </p>
                      <p className="text-sm dark:text-gray-600">
                        {log?.book?.architects?.at(0)?.author.name || 'Unknown'}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm dark:text-gray-500">
                        {Math.round((log.percentage * log.numPages) / 100)}/
                        {log.numPages}
                      </p>
                    </div>
                  </div>
                  <ReadingProgress index={index} progress={log.percentage} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-4 space-y-5">
          <NextImage
            src={`/images/no-data.svg`}
            height={'210px'}
            width={'500px'}
            className="object-contain"
          />
          <p className="leading-none text-center dark:text-gray-600">
            You have not started logging your progress. Add a book to the
            `Currently Reading` shelf to add books here.
          </p>
        </div>
      )}
    </div>
  );
};
