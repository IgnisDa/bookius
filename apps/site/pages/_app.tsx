import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'urql';
import useDarkMode from 'use-dark-mode';
import { defaultLayout } from '../components/layouts/default';
import { client, ssrCache } from '../lib/helpers/urqlClient';
import './styles.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const title = 'Bookius';
const description = 'A website to track your progress with various books';
const site = 'https://bookius.ignisda.tech/';
const handle = '@ignisda';

function NextApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? defaultLayout;
  if (pageProps.urqlState) ssrCache.restoreData(pageProps.urqlState);

  useDarkMode(true, {
    onChange: (enabled) => {
      if (enabled) {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
      }
    },
  });

  return (
    <>
      <Head>
        <title>Bookius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={site}
        openGraph={{
          url: site,
          title: title,
          description: description,
          images: [],
          site_name: title,
        }}
        twitter={{
          handle: handle,
          site: handle,
          cardType: 'summary_large_image',
        }}
      />
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
              className="flex items-center justify-center"
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
