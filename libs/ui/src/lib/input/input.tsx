import { ComponentProps, FC } from 'react';
import { styled, theme as t } from '../../stitches.config';

export const StitchesInput = styled('input', {
  width: '100%',
  paddingY: t.space[2],
  paddingX: t.space[2],
  fontFamily: t.fonts.sans,
  variants: {
    outlined: {
      true: { borderWidth: 0.5, borderColor: t.colors.gray7 },
    },
    rounded: {
      true: { borderRadius: t.space[1] },
    },
  },
  defaultVariants: {
    outlined: true,
    rounded: true,
  },
});

type StitchedInputProps = ComponentProps<typeof StitchesInput>;

type InputProps = { isDisabled?: boolean } & StitchedInputProps;

export const Input: FC<InputProps> = ({ children, isDisabled, ...props }) => {
  return <StitchesInput {...props} disabled={isDisabled} />;
};
