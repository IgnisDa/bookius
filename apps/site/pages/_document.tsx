import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, theme as t } from '@bookius/ui';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          {/* {getCssText()} */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}