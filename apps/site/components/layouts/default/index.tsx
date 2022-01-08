import { ReactElement } from 'react';
import { Sidebar } from './elements/Sidebar';

export const defaultLayout = (page: ReactElement) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen p-3 pb-24 bg-cream-white dark:bg-base-300 lg:p-0">
        <main className="flex-1 p-4 pl-0 lg:ml-32">{page}</main>
      </div>
    </div>
  );
};
