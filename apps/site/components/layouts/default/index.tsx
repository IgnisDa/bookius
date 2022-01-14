import { ReactElement } from 'react';

export const defaultLayout = (page: ReactElement) => {
  return (
    <div className="flex">
      <div className="flex flex-1 min-h-screen px-3 py-16 bg-base-300 lg:p-0">
        <main className="flex-1">{page}</main>
      </div>
    </div>
  );
};
