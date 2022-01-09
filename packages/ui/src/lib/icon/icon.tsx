import { FC } from 'react';
import { Root as AccessibleIconRoot } from '@radix-ui/react-accessible-icon';

export interface IconProps {
  label: string;
}

export const Icon: FC<IconProps> = ({ children, label }) => (
  <AccessibleIconRoot label={label}>{children}</AccessibleIconRoot>
);

export default Icon;
