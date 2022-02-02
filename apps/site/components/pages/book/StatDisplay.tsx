import { FC } from 'react';

type StatDisplayComponentProps = {
  prefix: string;
  value: number;
  suffix: string;
};

export const StatDisplayComponent: FC<StatDisplayComponentProps> = ({
  prefix,
  value,
  suffix,
}) => {
  return (
    <div>
      <span className="block text-lg md:text-2xl">{prefix}</span>
      <span className="mt-2 block text-4xl font-semibold text-accent sm:text-5xl md:text-6xl">
        {value}
      </span>
      <span className="block text-lg md:text-2xl">{suffix}</span>
    </div>
  );
};
