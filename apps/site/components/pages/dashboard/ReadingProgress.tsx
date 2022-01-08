import { Root, Indicator } from '@radix-ui/react-progress';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

type ReadingProgressProps = {
  progress: number;
  index: number;
};

export const ReadingProgress: FC<ReadingProgressProps> = ({
  progress,
  index,
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setDisplayProgress(progress), index * 330);
  }, []);

  return (
    <Root
      value={progress}
      className="h-1 overflow-hidden bg-gray-300 rounded-full"
    >
      <Indicator
        className={clsx(
          'bg-accent-purple h-full transition-[width] duration-700 ease-in-out',
          progress >= 100 && 'bg-green-500'
        )}
        style={{ width: `${displayProgress}%` }}
      />
    </Root>
  );
};
