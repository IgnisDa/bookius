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
import { AnimatePresence, motion } from 'framer-motion';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function NextApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? defaultLayout;
  if (pageProps.urqlState) ssrCache.restoreData(pageProps.urqlState);
  globalStyles();
  return (
    <>
      <Head>
        <title>Bookius</title>
      </Head>
      <DefaultSeo />
      <Provider value={client}>
        <ToastContainer position="bottom-center" />
        {getLayout(
          <AnimatePresence exitBeforeEnter>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={router.pathname}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        )}
      </Provider>
    </>
  );
}

export default NextApp;
