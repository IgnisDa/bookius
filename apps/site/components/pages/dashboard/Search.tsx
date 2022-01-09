export const SearchComponent = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-700 font-heading text-base-100 dark:text-accent">
        Find your favorite books/authors
      </h1>
      <fieldset className="flex w-full space-x-2">
        <input
          type="text"
          className="flex-1 text-gray-900 input input-ghost input-bordered dark:text-gray-500 focus:bg-gray-200 focus:dark:bg-gray-800 focus:text-gray-900 focus:dark:text-gray-200"
          placeholder="Enter something and press enter"
        />
        <button className="btn btn-secondary dark:btn-primary">Go</button>
      </fieldset>
    </div>
  );
};
