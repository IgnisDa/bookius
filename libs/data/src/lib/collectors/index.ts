export type TBookBuilder = {
  title: string;
  description: string | null;
  isbn10: string | null;
  isbn13: string | null;
  openLibraryKey: string;
  authors: { name: string; key: string }[];
  bookImages: {
    coverUrl: string;
    base64String: string;
  }[];
};

export * from './open-library.collector';
