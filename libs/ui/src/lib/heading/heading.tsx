import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'text-4xl font-bold text-gray-600 font-heading',
        className
      )}
    >
      {children}
    </h1>
  );
};
