export const SearchComponent = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-700 dark:text-2xl font-heading dark:text-accent">
        Find your favorite books/authors
      </h1>
      <fieldset className="flex w-full space-x-2">
        <input
          type="text"
          className="flex-1 input input-ghost input-bordered dark:text-black"
          placeholder="Enter something and press enter"
        />
        <button className="btn btn-secondary dark:btn-primary">Go</button>
      </fieldset>
    </div>
  );
};
