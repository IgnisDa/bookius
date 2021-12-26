import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { defaultLayout } from '../components/layouts/default';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'urql';
import { client, ssrCache } from '../lib/helpers/urqlClient';

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
  return (
    <>
      <Head>
        <title>Bookius</title>
      </Head>
      <Provider value={client}>
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default NextApp;
