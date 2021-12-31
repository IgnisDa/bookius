import { ComponentProps, FC } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { keyframes, styled, theme as t } from '../../stitches.config';
import { Box, Flex } from '../box/box';

const StitchesButton = styled('button', {
  // Reset
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  paddingX: t.space[6],
  paddingY: t.space[3],
  backgroundColor: 'White',

  variants: {
    variant: {
      blue: {
        color: t.colors.blue10,
        boxShadow: `0 2px 10px ${t.colors.blackA7}`,
        '&:hover': { backgroundColor: t.colors.accentLightBlue },
      },
      black: { color: t.colors.blackA12 },
      green: {
        backgroundColor: t.colors.green11,
        color: t.colors.green1,
        '&:hover': { backgroundColor: t.colors.green9 },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
    rounded: { true: { borderRadius: t.space[2] } },
    paddingReset: {
      true: { paddingX: t.space[0], paddingY: t.space[0] },
    },
  },

  defaultVariants: {
    variant: 'blue',
    rounded: true,
  },
});

type StitchesButtonProps = ComponentProps<typeof StitchesButton>;

type ButtonProps = {
  isLoading?: boolean;
  loadingText?: string;
} & StitchesButtonProps;

const loader = keyframes({
  '0%': { transform: 'rotateZ(0)' },
  '100%': { transform: 'rotateZ(360deg)' },
});

const Spinner = styled(ImSpinner9, {
  animation: `${loader} 1s ease-in-out infinite`,
});

export const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  loadingText,
  ...props
}) => {
  return (
    <StitchesButton {...props}>
      {isLoading ? (
        <Flex isCentered css={{ spaceX: t.space[2] }}>
          <Spinner />
          <Box>{loadingText ? loadingText : 'Loading'}</Box>
        </Flex>
      ) : (
        <Box>{children}</Box>
      )}
    </StitchesButton>
  );
};
