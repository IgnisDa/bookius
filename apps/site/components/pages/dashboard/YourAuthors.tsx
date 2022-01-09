import { GetUserRelatedAuthorsQuery } from 'generated';
import { Icon, styled, theme as t } from 'ui';
import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import NextImage from 'next/image';
import { FunctionComponent } from 'react';
import { VscNotebook } from 'react-icons/vsc';
import { MoreButton } from '../../miscellaneous/MoreButton';

type YourAuthorsComponentProps = {
  authors: GetUserRelatedAuthorsQuery;
};

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: t.colors.gray8,
  '&[data-orientation=horizontal]': { height: '0.5px', width: '100%' },
});

export const YourAuthorsComponent: FunctionComponent<
  YourAuthorsComponentProps
> = ({ authors }) => {
  return (
    <div className="py-3 bg-white shadow-md dark:bg-base-200 rounded-2xl lg:w-2/5">
      <div className="flex items-center justify-between px-4 py-5 lg:px-6">
        <h1 className="text-4xl font-bold text-gray-700 font-heading dark:text-accent">
          Your Authors
        </h1>
        <MoreButton href="/authors" />
      </div>
      {authors.userRelatedAuthors.length > 0 ? (
        <div>
          {authors.userRelatedAuthors.map((author) => (
            <div key={author.id}>
              <StyledSeparator />
              <div className="flex items-center px-6 py-4">
                <Root className="inline-flex items-center justify-center mr-4 overflow-hidden align-middle bg-black rounded-lg select-none w-11 h-11">
                  <Image
                    className="object-cover w-full h-full"
                    src={`https://picsum.photos/seed/${author.id}/200`}
                  />
                  <Fallback
                    delayMs={600}
                    className="flex items-center justify-center w-full h-full font-semibold text-black bg-white"
                  >
                    {author.name
                      .split(' ')
                      .map((tk) => tk[0])
                      .slice(0, 3)
                      .join('')}
                  </Fallback>
                </Root>
                <div>
                  <p className="text-lg text-gray-600 dark:text-secondary-content">
                    {author.name}
                  </p>
                </div>
                <Icon label={`Icon for ${author.name}`}>
                  <VscNotebook className="w-6 h-6 ml-auto mr-2 text-primary" />
                </Icon>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-4">
          <NextImage
            src={`/images/no-data.svg`}
            height={'300px'}
            width={'500px'}
            className="object-contain"
          />
          <p className="leading-none text-center dark:text-gray-600">
            You have not looked up any authors yet.
          </p>
        </div>
      )}
    </div>
  );
};
