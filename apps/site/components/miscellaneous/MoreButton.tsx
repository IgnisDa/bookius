import { Icon } from 'ui';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { FunctionComponent } from 'react';

type MoreButtonProps = {
  href: string;
};

export const MoreButton: FunctionComponent<MoreButtonProps> = ({ href }) => {
  return (
    <NextLink href={href} passHref>
      <a className="flex items-center justify-center">
        <button className="text-gray-800 hover:underline decoration-wavy dark:text-base-content">
          More
        </button>
        <Icon label="Right Arrow">
          <ArrowRightIcon className="w-4 h-4 ml-1 text-gray-800 fill-current dark:text-base-content" />
        </Icon>
      </a>
    </NextLink>
  );
};
