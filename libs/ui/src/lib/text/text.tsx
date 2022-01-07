import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import { css } from '../../stitches.config';

export const clampNumberOfLines = (noOfLines: number) =>
  css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': noOfLines,
    'line-clamp': noOfLines,
    '-webkit-box-orient': 'vertical',
  })();

type TextProps = HTMLAttributes<HTMLParagraphElement>;

export const Text: FC<TextProps> = ({ children, className }) => {
  return <p className={clsx('text-gray-600', className)}>{children}</p>;
};
