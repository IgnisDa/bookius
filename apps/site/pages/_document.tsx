import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="debug-screens">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
