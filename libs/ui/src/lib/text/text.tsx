import { css, styled, theme as t } from '../../stitches.config';

export const Text = styled('p', { fontFamily: t.fonts.body });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const clampNumberOfLines = (noOfLines: number) =>
  css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': noOfLines,
    'line-clamp': noOfLines,
    '-webkit-box-orient': 'vertical',
  })();
