import { Flex, Icon, styled, Text, theme as t } from '@bookius/ui';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { FunctionComponent } from 'react';

interface MoreButtonProps {
  href: string;
}

const RightArrow = styled(ArrowRightIcon, {
  marginLeft: t.space[1],
  size: t.space[3],
  transition: 'transform',
  transitionDuration: '300ms',
  '&:hover': {
    transform: 'translateX(2px)',
  },
});

const ButtonText = styled(Text, {
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const MoreButton: FunctionComponent<MoreButtonProps> = ({ href }) => {
  return (
    <NextLink href={href} passHref>
      <Flex as="a" align={'center'}>
        <ButtonText>More</ButtonText>
        <Icon label="Right Arrow">
          <RightArrow className="text-gray-800 fill-current" />
        </Icon>
      </Flex>
    </NextLink>
  );
};
