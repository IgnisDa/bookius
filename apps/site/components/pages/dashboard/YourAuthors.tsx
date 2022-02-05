import { GetUserRelatedAuthorsQuery } from '@bookius/generated';
import { Icon } from '@bookius/ui';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import NextImage from 'next/image';
import { FunctionComponent } from 'react';
import { VscNotebook } from 'react-icons/vsc';
import noData from '../../../public/images/no-data-1.svg';
import { MoreButton } from '../../miscellaneous/MoreButton';

type YourAuthorsComponentProps = {
  authors: GetUserRelatedAuthorsQuery;
};

export const YourAuthorsComponent: FunctionComponent<
  YourAuthorsComponentProps
> = ({ authors }) => {
  return (
    <div className="flex-shrink overflow-hidden rounded-2xl rounded-bl-sm bg-base-200 pt-3 shadow-md lg:w-2/5 lg:pb-0.5">
      <div className="flex items-center justify-between px-4 py-5 lg:px-6">
        <h1 className="font-heading text-4xl font-bold text-accent">
          Your Authors
        </h1>
        <MoreButton href="/authors" />
      </div>
      {authors.userRelatedAuthors.length > 0 ? (
        <div>
          {authors.userRelatedAuthors.map((author, index) => (
            <div
              key={index}
              className={clsx(
                'border-l-4',
                index === 0 && 'border-success',
                index === 1 && 'border-info',
                index === 2 && 'border-error',
                index === 3 && 'border-primary'
              )}
            >
              <div className="flex items-center px-6 py-4">
                <Root className="mr-4 inline-flex h-11 w-11 select-none items-center justify-center overflow-hidden rounded-lg bg-black align-middle">
                  <Image
                    className="h-full w-full object-cover"
                    src={`https://picsum.photos/seed/${author?.id}/200`}
                  />
                  <Fallback
                    delayMs={600}
                    className="flex h-full w-full items-center justify-center bg-white font-semibold text-black"
                  >
                    {author?.name
                      .split(' ')
                      .map((tk) => tk[0])
                      .slice(0, 3)
                      .join('')}
                  </Fallback>
                </Root>
                <div>
                  <p className="text-lg text-secondary-content">
                    {author?.name}
                  </p>
                </div>
                <Icon label={`Icon for ${author?.name}`}>
                  <VscNotebook className="ml-auto mr-2 h-6 w-6 fill-current text-pink-400" />
                </Icon>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-5 p-4">
          <NextImage
            src={noData}
            height={'280px'}
            width={'500px'}
            className="object-contain"
          />
          <p className="text-center leading-none text-primary-content">
            You have not looked up any authors yet.
          </p>
        </div>
      )}
    </div>
  );
};
