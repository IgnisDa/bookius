import { AppProps } from 'next/app';
import Head from 'next/head';
import 'windi.css';
import './styles.css';

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default NextApp;
