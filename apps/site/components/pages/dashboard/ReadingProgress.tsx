import { FC, useEffect, useState } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { styled, theme as t } from '@bookius/ui';

type ReadingProgressProps = {
  progress: number;
  index: number;
};

const ProgressRoot = styled(ProgressPrimitive.Root, {
  overflow: 'hidden',
  background: t.colors.gray8,
  borderRadius: '99999px',
  height: 5,
});

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: t.colors.accentPurple,
  height: '100%',
  transitionProperty: 'width',
  transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
  transitionDuration: '660ms',
});

export const ReadingProgress: FC<ReadingProgressProps> = ({
  progress,
  index,
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setDisplayProgress(progress), index * 800);
  }, []);

  return (
    <ProgressRoot value={progress}>
      <ProgressIndicator
        style={{ width: `${displayProgress}%` }}
        css={progress >= 100 ? { backgroundColor: t.colors.green8 } : {}}
      />
    </ProgressRoot>
  );
};
