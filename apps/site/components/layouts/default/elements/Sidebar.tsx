import { Icon } from 'ui';
import { AUTH_TOKEN_KEY } from '../../../../lib/constants';
import clsx from 'clsx';
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

const linkClasses =
  'transition-transform duration-200 transform h-7 w-7 hover:scale-125';

const LINKS = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <FiPieChart className={linkClasses} />,
  },
  {
    name: 'Favorite',
    href: '/favorites',
    icon: <FiHeart className={linkClasses} />,
  },
  {
    name: 'Shelves',
    href: '/shelves',
    icon: <HiOutlineCollection className={linkClasses} />,
  },
  {
    name: 'Bookmarks',
    href: '/bookmarks',
    icon: <FiBookmark className={linkClasses} />,
  },
  {
    name: 'Calendar',
    href: '/calendar',
    icon: <HiOutlineCalendar className={linkClasses} />,
  },
];

export const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  useEffect(() => {
    setTimeout(() => {
      if (Cookies.get(AUTH_TOKEN_KEY)) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    }, 3000);
  }, []);

  const router = useRouter();

  let accountButton;

  if (typeof isLoggedIn === 'undefined')
    accountButton = <CgSpinnerTwoAlt className="h-9 w-9 animate-spin" />;
  else if (isLoggedIn === true)
    accountButton = (
      <RiSettings3Line className="transition-transform transform h-9 w-9 hover:scale-125" />
    );
  else
    accountButton = (
      <FiLogIn className="transition-transform transform h-9 w-9 hover:scale-125" />
    );

  return (
    <aside>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between py-0 bg-accent-purple lg:my-2 lg:rounded-r-3xl lg:py-20 lg:flex-col lg:w-20 lg:top-0 lg:bottom-0">
        <NextLink href="/" passHref>
          <a className="w-16 h-16 transition-transform duration-200 transform hover:scale-105">
            <NextImage src={logo} alt="Bookius Logo Image" priority />
          </a>
        </NextLink>
        <div className="flex space-x-6 lg:flex-col lg:space-x-0">
          {LINKS.map((link, index) => (
            <NextLink href={link.href} passHref={true} key={index}>
              <a
                className={clsx(
                  'flex justify-center items-center rounded-lg py-4',
                  router.pathname === link.href ? 'text-black' : 'text-white'
                )}
              >
                {link.icon}
              </a>
            </NextLink>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="text-black"
            onClick={() => {
              if (typeof isLoggedIn === 'undefined') return;
              else if (!isLoggedIn) router.push('/enlist');
              else if (isLoggedIn) {
                Cookies.remove(AUTH_TOKEN_KEY);
                setIsLoggedIn(false);
                toast.info('You have been logged out!');
                router.push('/enlist');
              }
            }}
          >
            <Icon label="Login">{accountButton}</Icon>
          </button>
        </div>
      </div>
    </aside>
  );
};
