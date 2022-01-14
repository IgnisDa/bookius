import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent } from 'react';

type SearchInputComponentProps = {
  search: string;
  updateSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInputComponent: FC<SearchInputComponentProps> = ({
  search,
  updateSearch,
}) => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: `/search`,
      query: { q: encodeURIComponent(search) },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold text-700 font-heading text-accent">
        Find your favorite books/authors
      </h1>
      <fieldset className="flex w-full space-x-2">
        <motion.input
          type="text"
          className="flex-1 text-gray-500 input input-ghost input-bordered focus:bg-gray-800 focus:text-gray-200"
          placeholder="Enter something and press enter"
          onChange={updateSearch}
        />
        <motion.button
          className="btn btn-secondary btn-primary"
          type="submit"
          disabled={!search}
        >
          Search
        </motion.button>
      </fieldset>
    </form>
  );
};
