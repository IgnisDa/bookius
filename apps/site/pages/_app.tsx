import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import 'windi.css';
import './styles.css';
import { defaultLayout } from '../components/layouts/default';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function NextApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? defaultLayout;
  return (
    <>
      <Head>
        <title>Bookius</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default NextApp;
