import {
  Box,
  Button,
  Flex,
  Icon,
  loader,
  styled,
  theme as t,
} from '@bookius/ui';
import { AUTH_TOKEN_KEY } from 'apps/site/lib/constants';
import Cookies from 'js-cookie';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { FiBookmark, FiHeart, FiLogIn, FiPieChart } from 'react-icons/fi';
import { HiOutlineCalendar, HiOutlineCollection } from 'react-icons/hi';
import { RiSettings3Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
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

const BottomButton = styled(Icon, {
  size: t.space[9],
  transitionProperty: 'transform',
  transitionDuration: '0.2s',
  '&:hover': { transform: 'scale(1.2)' },
});

export const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (Cookies.get(AUTH_TOKEN_KEY)) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    }, 3000);
  }, []);

  const router = useRouter();

  let accountButton;

  if (typeof isLoggedIn === 'undefined')
    accountButton = (
      <BottomButton
        as={CgSpinnerTwoAlt}
        css={{ animation: `${loader} 1s ease-in-out infinite` }}
      />
    );
  else if (isLoggedIn === true)
    accountButton = <BottomButton as={RiSettings3Line} />;
  else accountButton = <BottomButton as={FiLogIn} />;

  return (
    <aside>
      <LoginDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsLoggedIn={setIsLoggedIn}
      />
      <SidebarContainer
        direction={{ '@initial': 'row', '@lg': 'column' }}
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
            onClick={() => {
              if (typeof isLoggedIn === 'undefined') return;
              else if (!isLoggedIn) setIsOpen(true);
              else if (isLoggedIn) {
                Cookies.remove(AUTH_TOKEN_KEY);
                setIsLoggedIn(false);
                toast.info('You have been logged out!');
                router.push('/');
              }
            }}
            variant={'black'}
            ghost
          >
            <Icon label="Login">{accountButton}</Icon>
          </Button>
        </Flex>
      </SidebarContainer>
    </aside>
  );
};
