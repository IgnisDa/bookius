import { globalStyles } from '@bookius/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { Fragment, ReactElement, ReactNode } from 'react';
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

function NextApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? defaultLayout;
  if (pageProps.urqlState) ssrCache.restoreData(pageProps.urqlState);
  globalStyles();

  const MotionedComponent = motion(Fragment);

  return (
    <>
      <Head>
        <title>Bookius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo />
      <NextNprogress />
      <Provider value={client}>
        <ToastContainer position="bottom-center" />
        {getLayout(
          <AnimatePresence exitBeforeEnter>
            <motion.div
              style={{ height: '100%', width: '100%' }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={router.pathname}
              className="debug-screens"
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
