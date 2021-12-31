import { globalStyles } from '@bookius/ui';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'urql';
import { defaultLayout } from '../components/layouts/default';
import { client, ssrCache } from '../lib/helpers/urqlClient';
import './styles.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function NextApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? defaultLayout;
  if (pageProps.urqlState) ssrCache.restoreData(pageProps.urqlState);
  globalStyles();
  return (
    <>
      <Head>
        <title>Bookius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo />
      <Provider value={client}>
        <ToastContainer position="bottom-center" />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}

export default NextApp;
