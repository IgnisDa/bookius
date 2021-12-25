import { ReactElement } from 'react';
import { Sidebar } from './elements/Sidebar';

export const defaultLayout = (page: ReactElement) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col min-h-screen flex-1">
        <main className="flex-1">{page}</main>
        <footer className="flex-none">Footer</footer>
      </div>
    </div>
  );
};
