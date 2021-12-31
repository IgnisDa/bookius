import { styled, theme as t } from '../../stitches.config';

export const Heading = styled('h1', {
  fontFamily: t.fonts.heading,
  fontWeight: 'bold',
  variants: {
    size: {
      lg: { fontSize: t.space[8] },
    },
    color: {
      darkGray: { color: t.colors.gray11 },
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'darkGray',
  },
});
