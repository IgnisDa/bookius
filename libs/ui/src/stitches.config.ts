import { createStitches } from '@stitches/react';

const UI_PREFIX = 'rad';

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
