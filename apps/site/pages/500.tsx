import NextImage from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import Image500 from '../public/images/500-image.png';

const ServerErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-10 lg:space-x-reverse lg:space-x-10 lg:flex-row-reverse lg:space-y-0">
      <div className="space-y-4 text-center lg:space-y-2">
        <h1 className="text-6xl font-semibold tracking-tighter text-rose-500 dark:text-red-600">
          500
        </h1>
        <h2 className="text-4xl text-base-300 dark:text-blue-300">
          You just broke something...
        </h2>
        <div>
          <Link href="/dashboard">
            <a className="text-gray-600 underline hover:text-blue-600 dark:text-base-content dark:hover:text-warning">
              Take me back, it wasn't me, I swear!
            </a>
          </Link>
        </div>
      </div>
      <div>
        <NextImage
          src={Image500}
          height={'600px'}
          width={'600px'}
          layout="intrinsic"
          priority
        />
      </div>
    </div>
  );
};

ServerErrorPage.getLayout = (page: ReactElement) => (
  <main className="flex flex-col items-center justify-center w-screen h-screen bg-cream-white dark:bg-base-300">
    {page}
  </main>
);

export default ServerErrorPage;
