import { BookDetailsFragment } from '@bookius/generated';
import { FC } from 'react';

type ContinueReadingComponentProps = {
  book: BookDetailsFragment;
};

export const ContinueReadingComponent: FC<ContinueReadingComponentProps> = ({
  book,
}) => {
  return (
    <div>
      <div>Continue Reading</div>
      <div>Other details</div>
    </div>
  );
};
