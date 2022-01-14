import { GetUserRelatedAuthorsQuery } from '@bookius/generated';
import { Icon } from '@bookius/ui';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import zip from 'lodash/zip';
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
    <div className="pt-3 rounded-bl-none shadow-md bg-base-200 rounded-2xl lg:w-2/5">
      <div className="flex items-center justify-between px-4 py-5 lg:px-6">
        <h1 className="text-4xl font-bold font-heading text-accent">
          Your Authors
        </h1>
        <MoreButton href="/authors" />
      </div>
      {authors.userRelatedAuthors.length > 0 ? (
        <div>
          {zip(authors.userRelatedAuthors, [
            'border-success',
            'border-secondary',
            'border-info',
            'border-error',
            'border-primary',
          ]).map(([author, border]) => (
            <div key={author?.id} className={clsx('border-l-4', border)}>
              <div className="flex items-center px-6 py-4">
                <Root className="inline-flex items-center justify-center mr-4 overflow-hidden align-middle bg-black rounded-lg select-none w-11 h-11">
                  <Image
                    className="object-cover w-full h-full"
                    src={`https://picsum.photos/seed/${author?.id}/200`}
                  />
                  <Fallback
                    delayMs={600}
                    className="flex items-center justify-center w-full h-full font-semibold text-black bg-white"
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
                  <VscNotebook className="w-6 h-6 ml-auto mr-2 text-primary" />
                </Icon>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-4 space-y-5">
          <NextImage
            src={noData}
            height={'280px'}
            width={'500px'}
            className="object-contain"
          />
          <p className="leading-none text-center text-primary-content">
            You have not looked up any authors yet.
          </p>
        </div>
      )}
    </div>
  );
};
