import NextImage from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

type ErrorComponentPageProps = {
  errorCode: number;
  mainText: string;
  linkText: string;
  image: StaticImageData;
};

export const getErrorLayout = (page: ReactElement) => (
  <main className="flex flex-col items-center justify-center w-screen h-screen bg-base-300">
    {page}
  </main>
);

export const ErrorComponentPage: FC<ErrorComponentPageProps> = ({
  errorCode,
  mainText,
  linkText,
  image,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-10 lg:space-x-reverse lg:space-x-10 lg:flex-row-reverse lg:space-y-0">
      <div className="space-y-4 text-center lg:space-y-2">
        <h1 className="text-6xl font-semibold tracking-tighter text-red-600">
          {errorCode}
        </h1>
        <h2 className="text-4xl text-blue-300">{mainText}</h2>
        <div>
          <Link href="/dashboard">
            <a className="underline text-base-content hover:text-warning">
              {linkText}
            </a>
          </Link>
        </div>
      </div>
      <div>
        <NextImage
          src={image}
          height={'500px'}
          width={'500px'}
          layout="intrinsic"
          priority
        />
      </div>
    </div>
  );
};
