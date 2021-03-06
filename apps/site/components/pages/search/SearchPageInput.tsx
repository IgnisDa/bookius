import * as Toggle from '@radix-ui/react-toggle';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, FormEvent, useState } from 'react';

type SearchPageInputComponentProps = {};

export const SearchPageInputComponent: FC<
  SearchPageInputComponentProps
> = () => {
  const [userInput, setUserInput] = useState('');
  const [toggled, setToggled] = useState(false);
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toggled
      ? router.push({ pathname: `/book`, query: { isbn: userInput } }) // FIXME: Redirect using an API route
      : router.push({ pathname: '/search', query: { q: userInput } });
  };

  return (
    <form onSubmit={onSubmit} className="form-control">
      <label htmlFor="isbn" className="label">
        <span className="label-text text-primary-content">
          {toggled
            ? "Enter a book's ISBN 10/13 code to directly jump to it"
            : 'Enter the name of the book you want to search for'}
        </span>
      </label>
      <label className="relative input-group">
        <div>
          <Toggle.Root
            onPressedChange={(e) => setToggled(e)}
            aria-label="toggle-isbn"
            className="font-semibold !rounded-l-lg !rounded-r-none text-black border-0 btn  bg-accent-purple hover:bg-purple-500"
          >
            {toggled ? 'ISBN' : 'TITLE'}
          </Toggle.Root>
        </div>
        <input
          id="isbn"
          placeholder={toggled ? '9781663616562' : 'Throne of glass'}
          className="w-full !rounded-r-lg input input-bordered input-ghost  focus:bg-opacity-0 focus:bg-gray-200  text-primary-content"
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button
          className={clsx(
            'absolute top-0 right-0 btn btn-accent',
            !userInput && 'pointer-events-none'
          )}
        >
          Find
        </button>
      </label>
      <div className="flex justify-between mt-2 text-xs text-orange-400">
        <div>(click to change)</div>
        <div>(very obvious)</div>
      </div>
    </form>
  );
};
