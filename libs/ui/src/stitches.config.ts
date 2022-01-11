import { createStitches, CSS as StitchesCSS } from '@stitches/react';

const UI_PREFIX = 'rad';

export type CSS = StitchesCSS<typeof config>;

const BODY_FONT = 'Biotif';

export const clampNumberOfLines = (noOfLines: number) =>
  css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': noOfLines,
    'line-clamp': noOfLines,
    '-webkit-box-orient': 'vertical',
  })();

export const { styled, getCssText, css, theme, config, globalCss, keyframes } =
  createStitches({ prefix: UI_PREFIX });

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: BODY_FONT,
      fontStyle: 'bold',
      fontWeight: 700,
      src: `url('fonts/biotif-bold-webfont.woff') format('woff2'), url('fonts/biotif-bold-webfont.woff') format('woff')`,
    },

    {
      fontFamily: BODY_FONT,
      fontStyle: 'medium',
      fontWeight: 500,
      src: `url('fonts/biotif-medium-webfont.woff2') format('woff2'), url('fonts/biotif-medium-webfont.woff') format('woff')`,
    },
    {
      fontFamily: BODY_FONT,
      fontStyle: 'normal',
      fontWeight: 400,
      src: `url('fonts/biotif-regular-webfont.woff2') format('woff2'), url('fonts/biotif-regular-webfont.woff') format('woff')`,
    },
  ],
  '*': {
    fontFamily: BODY_FONT,
  },
});
