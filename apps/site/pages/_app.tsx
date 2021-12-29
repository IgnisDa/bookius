import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'urql';
import { defaultLayout } from '../components/layouts/default';
import { theme } from '../lib/helpers/theme';
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
  return (
    <>
      <Head>
        <title>Bookius</title>
      </Head>
      <DefaultSeo />
      <Provider value={client}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default NextApp;
