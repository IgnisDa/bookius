import { BookDetailsFragment } from '@bookius/generated';
import Image from 'next/image';
import { FC } from 'react';
import noBookImage from '../../../public/images/no-book.png';

type ImageDisplayComponentProps = {
  book: BookDetailsFragment;
};

export const ImageDisplayComponent: FC<ImageDisplayComponentProps> = ({
  book,
}) => {
  const hasCovers = book.bookImages.length > 0;
  const bookImage = book.bookImages?.at(0);

  return (
    <div className="relative h-[500px] w-[320px] flex-none sm:h-[550px] sm:w-[370px] lg:h-[700px] lg:w-[450px]">
      <Image
        data-src={bookImage?.coverUrl}
        data-base64-src={bookImage?.base64String}
        src={hasCovers ? bookImage?.coverUrl! : noBookImage}
        placeholder={hasCovers ? 'blur' : 'empty'}
        blurDataURL={hasCovers ? bookImage?.base64String : undefined}
        alt={
          hasCovers ? `Image for '${book.title}'` : 'No valid book covers found'
        }
        className="rounded-xl"
        layout="fill"
        loading="eager"
      />
    </div>
  );
};
