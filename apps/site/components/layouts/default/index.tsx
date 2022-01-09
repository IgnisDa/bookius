import { ReactElement } from 'react';
import { Sidebar } from './elements/Sidebar';

export const defaultLayout = (page: ReactElement) => {
  return (
    <div className="flex">
      <div className="flex flex-1 min-h-screen px-3 py-16 bg-cream-white dark:bg-base-300 lg:p-0">
        <main className="flex-1">{page}</main>
      </div>
    </div>
  );
};
