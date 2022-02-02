import { animate } from 'framer-motion';
import { createRef, FC, useEffect } from 'react';

type StatsCounterComponentProps = {
  from: number;
  to: number;
};

const StatsCounterComponent: FC<StatsCounterComponentProps> = ({
  from,
  to,
}) => {
  const nodeRef = createRef<HTMLParagraphElement>();
  useEffect(() => {
    const node = nodeRef.current!;
    const controls = animate(from, to, {
      duration: 2,
      onUpdate: (value) => (node.textContent = value.toFixed(0)),
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
};

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
      <p className="block text-lg md:text-2xl">{prefix}</p>
      <p className="mt-2 block text-4xl font-semibold text-accent sm:text-5xl md:text-6xl">
        <StatsCounterComponent from={0} to={value} />
      </p>
      <p className="block text-lg md:text-2xl">{suffix}</p>
    </div>
  );
};
