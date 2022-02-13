import { NextPage } from 'next';
import NextLink from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <div className="relative h-full w-full px-3 lg:flex">
      <div className="pointer-events-none fixed inset-0 hidden w-1/2 -translate-x-24 skew-x-12 border-r-2 border-base-100 bg-gray-300 bg-opacity-5 lg:block" />
      <div className="flex h-1/2 flex-col justify-center space-y-10 text-center lg:h-auto lg:w-2/5">
        <h1 className="text-8xl font-semibold text-accent 2xl:text-9xl">
          Bookius
        </h1>
        <h2 className="font-heading text-4xl">
          Make reading books easier for yourself
        </h2>
        <NextLink href="/dashboard">
          <a className="btn btn-primary mx-auto max-w-xs text-2xl tracking-wider">
            Get started
          </a>
        </NextLink>
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center lg:h-auto lg:w-3/5">
        <ul className="list-inside list-disc space-y-0 text-left text-2xl md:space-y-3 md:text-3xl">
          <li>Track your book progress</li>
          <li>Keep them in various shelves</li>
          <li>Share your statistics with others</li>
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
