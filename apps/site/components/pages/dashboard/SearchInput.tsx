import { motion } from 'framer-motion';
import Router from 'next/router';
import { ChangeEvent, FC, FormEvent } from 'react';
import { withQuery } from 'ufo';

type SearchInputComponentProps = {
  search: string;
  updateSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInputComponent: FC<SearchInputComponentProps> = ({
  search,
  updateSearch,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push(
      withQuery(`/search`, {
        q: encodeURIComponent(search),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold text-700 font-heading text-base-100 dark:text-accent">
        Find your favorite books/authors
      </h1>
      <fieldset className="flex w-full space-x-2">
        <motion.input
          type="text"
          className="flex-1 text-gray-900 input input-ghost input-bordered dark:text-gray-500 focus:bg-gray-200 focus:dark:bg-gray-800 focus:text-gray-900 focus:dark:text-gray-200"
          placeholder="Enter something and press enter"
          onChange={updateSearch}
        />
        <motion.button
          className="btn btn-secondary dark:btn-primary disabled:!text-black"
          type="submit"
          disabled={!search}
        >
          Search
        </motion.button>
      </fieldset>
    </form>
  );
};
