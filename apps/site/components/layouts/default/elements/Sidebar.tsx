import { Box, Button, css, Flex, Icon, styled, theme as t } from '@bookius/ui';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiBookmark, FiHeart, FiLogIn, FiPieChart } from 'react-icons/fi';
import { HiOutlineCalendar, HiOutlineCollection } from 'react-icons/hi';
import logo from '../../../../public/logo.png';
import { LoginDialog } from './LoginDialog';

const LINKS = [
  { name: 'Dashboard', href: '/dashboard', icon: FiPieChart },
  { name: 'Favorite', href: '/favorites', icon: FiHeart },
  { name: 'Shelves', href: '/shelves', icon: HiOutlineCollection },
  { name: 'Bookmarks', href: '/bookmarks', icon: FiBookmark },
  { name: 'Calendar', href: '/calendar', icon: HiOutlineCalendar },
];

const SidebarContainer = styled(Flex, {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: t.colors.accentPurple,
  '@lg': {
    width: t.space[20],
    top: 0,
    bottom: 0,
    paddingY: t.space[10],
    marginY: t.space[2],
    paddingX: t.space[2],
    borderTopRightRadius: t.space[8],
    borderBottomRightRadius: t.space[8],
  },
});

const LogoBox = styled(Box, {
  size: t.space[16],
  transitionProperty: 'transform',
  transitionDuration: '200ms',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <aside>
      <LoginDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarContainer
        direction={{
          '@initial': 'row',
          '@lg': 'column',
        }}
        justify={'between'}
      >
        <NextLink href="/" passHref>
          <LogoBox as="a">
            <NextImage src={logo} alt="Bookius Logo Image" priority />
          </LogoBox>
        </NextLink>
        <Flex
          direction={{ '@initial': 'row', '@lg': 'column' }}
          css={{ spaceX: t.space[6], '@lg': { spaceX: t.space[0] } }}
        >
          {LINKS.map((link, index) => (
            <NextLink href={link.href} passHref={true} key={index}>
              <Flex
                justify={'center'}
                align={'center'}
                as="a"
                css={{
                  borderRadius: t.space[2],
                  color: router.pathname === link.href ? 'black' : 'white',
                  paddingY: t.space[4],
                }}
              >
                <Box
                  as={link.icon}
                  css={{
                    size: t.space[7],
                    '&:hover': { transform: 'scale(1.2)' },
                    transitionProperty: 'transform',
                    transitionDuration: '0.2s',
                  }}
                />
              </Flex>
            </NextLink>
          ))}
        </Flex>
        <Flex isCentered>
          <Button
            onClick={() => setIsOpen(true)}
            variant={'black'}
            ghost
            paddingReset
          >
            <Icon label="Login">
              <FiLogIn
                className={css({
                  size: t.space[8],
                  '&:hover': { transform: 'scale(1.2)' },
                  transitionProperty: 'transform',
                  transitionDuration: '0.2s',
                })()}
              />
            </Icon>
          </Button>
        </Flex>
      </SidebarContainer>
    </aside>
  );
};
