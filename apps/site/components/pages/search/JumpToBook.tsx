import clsx from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';
import { withQuery } from 'ufo';

type JumpToBookComponentProps = {};

export const JumpToBookComponent: FC<JumpToBookComponentProps> = () => {
  const [isbn, setIsbn] = useState('');

  return (
    <form className="form-control">
      <label htmlFor="isbn" className="label">
        <span className="label-text text-base-100 dark:text-primary-content">
          Enter a book's ISBN 10/13 code to directly jump to it
        </span>
      </label>
      <label className="relative input-group ">
        <span className="bg-opacity-0 border border-gray-700 text-base-100 dark:text-primary-content">
          ISBN
        </span>
        <input
          id="isbn"
          placeholder="9781663616562"
          className="w-full !rounded-r-lg input input-bordered input-ghost text-base-100 dark:focus:bg-opacity-0 focus:bg-gray-200 focus:text-gray-800 dark:focus:text-gray-200 dark:text-primary-content"
          type="text"
          onChange={(e) => setIsbn(e.target.value)}
        />
        <Link href={withQuery('/books', { isbn: isbn })}>
          <a
            className={clsx(
              'absolute top-0 right-0 btn dark:btn-accent',
              !isbn && 'pointer-events-none'
            )}
          >
            Find
          </a>
        </Link>
      </label>
    </form>
  );
};
