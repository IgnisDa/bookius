import { DateTime } from 'luxon';
import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: DateTime;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: string;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: number;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
};

/** The standard interface that contains the error message when something goes wrong */
export type ApiError = {
  /** The error message giving details about what went wrong */
  message: Scalars['String'];
};

/** The people who have worked on a book */
export type ArchitectDto = {
  __typename: 'ArchitectDto';
  /** Details about the author */
  author: AuthorDto;
  /** Role of this particular architect */
  role: ArchitectRole;
};

/** The role of a person in the complete production of a book */
export enum ArchitectRole {
  Author = 'AUTHOR',
  Illustrator = 'ILLUSTRATOR',
}

/** An author that is available to be viewed by the user */
export type AuthorDto = {
  __typename: 'AuthorDto';
  /** A brief description of the author */
  bio?: Maybe<Scalars['String']>;
  /** The date and time when this author was added to the service */
  createdAt: Scalars['DateTime'];
  /** The primary key of the author */
  id: Scalars['BigInt'];
  /** Name of the author */
  name: Scalars['String'];
  /** The date and time when information about this author was last updated */
  updatedAt: Scalars['DateTime'];
};

/** A book that is available to be viewed by the user */
export type BookDto = {
  __typename: 'BookDto';
  /** The people involved in the production of this book */
  architects: Array<ArchitectDto>;
  /** The images associated with this book */
  bookImages: Array<BookImageDto>;
  /** The date and time when this book was added to the service */
  createdAt: Scalars['DateTime'];
  /** A brief description of the author */
  description?: Maybe<Scalars['String']>;
  /** The primary key of the book */
  id: Scalars['BigInt'];
  /** The ISBN-10 unique identifier of this book */
  isbn10: Scalars['ISBN'];
  /** The ISBN-13 unique identifier of this book */
  isbn13: Scalars['ISBN'];
  /** Name of the book */
  title: Scalars['String'];
  /** The date and time when information about this book was last updated */
  updatedAt: Scalars['DateTime'];
};

/** Details about a book without their architect details */
export type BookDtoWithoutArchitect = {
  __typename: 'BookDtoWithoutArchitect';
  /** The people involved in the production of this book */
  architects: Array<ArchitectDto>;
  /** The images associated with this book */
  bookImages: Array<BookImageDto>;
  /** The date and time when this book was added to the service */
  createdAt: Scalars['DateTime'];
  /** A brief description of the author */
  description?: Maybe<Scalars['String']>;
  /** The primary key of the book */
  id: Scalars['BigInt'];
  /** The ISBN-10 unique identifier of this book */
  isbn10: Scalars['ISBN'];
  /** The ISBN-13 unique identifier of this book */
  isbn13: Scalars['ISBN'];
  /** Name of the book */
  title: Scalars['String'];
  /** The date and time when information about this book was last updated */
  updatedAt: Scalars['DateTime'];
};

/** A simple author instance in database */
export type BookImageDto = {
  __typename: 'BookImageDto';
  /** A base64 encoded string to be used to provide blurred previews */
  base64String: Scalars['String'];
  /** A fully qualified url to the book cover */
  coverUrl: Scalars['URL'];
};

/** Model to track a user's reading progress with a particular book */
export type BookProgressLogDto = {
  __typename: 'BookProgressLogDto';
  /** The book this is related to */
  book: BookDto;
  /** The ID of the book it is associated with */
  bookId: Scalars['BigInt'];
  /** A unique ID associated with this record */
  id: Scalars['BigInt'];
  /** The number of pages in this run of reading */
  numPages: Scalars['NonNegativeInt'];
  /** Face value, so if a book is 82% complete, this value will be `82.00` */
  percentage: Scalars['NonNegativeFloat'];
  /** The date and time this was first logged */
  startedOn: Scalars['DateTime'];
  /** The date and time this was last updated on */
  updatedOn: Scalars['DateTime'];
};

/** The object returned when there is an error getting details about a book */
export type BooksDetailsError = ApiError & {
  __typename: 'BooksDetailsError';
  /** The error encountered while executing this query */
  message: Scalars['String'];
};

/** The result returned when a client tries to get details about a particular book */
export type BooksDetailsResultUnion = BookDto | BooksDetailsError;

/** The object returned when there is an error while performing the search */
export type BooksSearchError = ApiError & {
  __typename: 'BooksSearchError';
  /** The error encountered while executing this query */
  message: Scalars['String'];
};

/** The input type used to search for books */
export type BooksSearchInput = {
  /** The position in the collection at which to start the list of results */
  offset?: InputMaybe<Scalars['Int']>;
  /** Full-text query string, should be URI **decoded** */
  query: Scalars['String'];
};

/** The result returned when a client tries to search for a book */
export type BooksSearchResultUnion = BooksSearchError | OpenLibraryResponse;

/** Type returned for the error when a new user is created. */
export type CreateUserError = {
  __typename: 'CreateUserError';
  /** General errors relating to the registration attempt */
  message?: Maybe<Scalars['String']>;
};

/** Result type returned as the result when new user is created. */
export type CreateUserResultUnion = CreateUserError | UserDto;

/** The input type to create a new shelf for a user */
export type CreateUserShelfInput = {
  /** A description associated with this shelf */
  description?: InputMaybe<Scalars['String']>;
  /**
   * Wether this shelf will be publicly available to others. A public shelf can be viewed
   * by anyone.
   */
  isPublic?: InputMaybe<Scalars['Boolean']>;
  /** Name of the new shelf */
  name: Scalars['String'];
};

/** The type returned for the errors when login is unsuccessful */
export type LoginError = ApiError & {
  __typename: 'LoginError';
  /** The error message corresponding to this login attempt */
  message: Scalars['String'];
};

/** The type returned on successful login */
export type LoginResult = {
  __typename: 'LoginResult';
  /** Wether the login attempt was successful */
  status: Scalars['Boolean'];
  /** The user this login result is associated with */
  user: UserDto;
};

/** Result type returned as the result when someone tries to login */
export type LoginResultUnion = LoginError | LoginResult;

export type Mutation = {
  __typename: 'Mutation';
  /** Mutation to create a new user with a given authentication token. */
  createUser: CreateUserResultUnion;
  /** Create a shelf for the current user. */
  createUserShelf: ShelfDto;
  /** Login using an authentication token. */
  loginUser: LoginResultUnion;
};

export type MutationCreateUserArgs = {
  issuer: Scalars['String'];
};

export type MutationCreateUserShelfArgs = {
  input: CreateUserShelfInput;
};

export type MutationLoginUserArgs = {
  issuer: Scalars['String'];
};

/** The response object when communicating with the Open Library API */
export type OpenLibraryResponse = {
  __typename: 'OpenLibraryResponse';
  /** The documents returned by the API */
  docs: Array<OpenLibraryWorkDto>;
  /** Number of results found for the query */
  numFound: Scalars['Int'];
  /** The offset for the query */
  offset: Scalars['Int'];
};

/** An author of a work present in the Open Library databases */
export type OpenLibraryWorkAuthorDto = {
  __typename: 'OpenLibraryWorkAuthorDto';
  /** A unique key assigned to this author */
  key: Scalars['String'];
  /** Name of the author */
  name: Scalars['String'];
};

/** A volume from the Open Library API */
export type OpenLibraryWorkDto = {
  __typename: 'OpenLibraryWorkDto';
  /** Names of the author of the book */
  authorName?: Maybe<Array<Scalars['String']>>;
  /** Cover image ID for the book */
  coverI?: Maybe<Scalars['String']>;
  /** Unique Industry Identifiers for the book */
  isbn?: Maybe<Array<Scalars['String']>>;
  /** The open library unique ID */
  key: Scalars['String'];
  /** The language the book is written in */
  language?: Maybe<Array<Scalars['String']>>;
  /** Title of the book */
  title: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  /** Get details about a particular work from the different APIs. */
  bookDetails: BooksDetailsResultUnion;
  /** Check whether a user with the given issuer exists in the database. */
  checkUserByIssuer: Scalars['Boolean'];
  /** Get a filtered list of all books in the service. */
  filterBooks: Array<BookDto>;
  /** Get a list of all shelves created by this user. */
  filterUserShelves: Array<ShelfDto>;
  /** Get a list of books related to a search query from Open Library API. */
  openLibraryBooksSearch: BooksSearchResultUnion;
  /** Get list of book progresses that are related to the user. */
  userBookProgressLogs: Array<BookProgressLogDto>;
  /** Get a small list of authors that are related to the user. */
  userRelatedAuthors: Array<AuthorDto>;
  /** Get a small list of books that are related to the user. */
  userRelatedBooks: Array<BookDto>;
};

export type QueryBookDetailsArgs = {
  isbn: Scalars['ISBN'];
};

export type QueryCheckUserByIssuerArgs = {
  issuer: Scalars['String'];
};

export type QueryFilterBooksArgs = {
  take: Scalars['NonNegativeInt'];
};

export type QueryFilterUserShelvesArgs = {
  take: Scalars['NonNegativeInt'];
};

export type QueryOpenLibraryBooksSearchArgs = {
  input: BooksSearchInput;
};

export type QueryUserBookProgressLogsArgs = {
  take: Scalars['NonNegativeInt'];
};

/** Counts of various statistics related to shelves */
export type ShelfCountDto = {
  __typename: 'ShelfCountDto';
  /** The number of books in this shelf */
  books: Scalars['Float'];
};

/** A shelf that is created by a user */
export type ShelfDto = {
  __typename: 'ShelfDto';
  /** Counts of various statistics related to shelves */
  _count: ShelfCountDto;
  /** The books that are contained in this shelf */
  books: Array<BookDtoWithoutArchitect>;
  /** The date and time when this shelf was created */
  createdAt: Scalars['DateTime'];
  /** A brief description about the shelf and what is contains */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the shelf */
  id: Scalars['ID'];
  /** Whether the shelf is visible to other users */
  isPublic: Scalars['Boolean'];
  /** Name of the shelf */
  name: Scalars['String'];
  /** The date and time when information about this shelf was last updated */
  updatedAt: Scalars['DateTime'];
};

/** Critical details about a user of the service */
export type UserDto = {
  __typename: 'UserDto';
  /** The unique identifier for this user */
  id: Scalars['String'];
};

export type LoginUserMutationVariables = Exact<{
  issuer: Scalars['String'];
}>;

export type LoginUserMutation = {
  __typename: 'Mutation';
  loginUser:
    | { __typename: 'LoginError'; message: string }
    | { __typename: 'LoginResult'; status: boolean };
};

export type CreateUserMutationVariables = Exact<{
  issuer: Scalars['String'];
}>;

export type CreateUserMutation = {
  __typename: 'Mutation';
  createUser:
    | { __typename: 'CreateUserError'; message?: string | null | undefined }
    | { __typename: 'UserDto' };
};

export type CreateUserShelfMutationVariables = Exact<{
  input: CreateUserShelfInput;
}>;

export type CreateUserShelfMutation = {
  __typename: 'Mutation';
  createUserShelf: { __typename: 'ShelfDto'; id: string };
};

export type CheckUserByIssuerQueryVariables = Exact<{
  issuer: Scalars['String'];
}>;

export type CheckUserByIssuerQuery = {
  __typename: 'Query';
  checkUserByIssuer: boolean;
};

export type GetUserRelatedBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserRelatedBooksQuery = {
  __typename: 'Query';
  userRelatedBooks: Array<{
    __typename: 'BookDto';
    title: string;
    id: number;
    architects: Array<{
      __typename: 'ArchitectDto';
      role: ArchitectRole;
      author: { __typename: 'AuthorDto'; name: string };
    }>;
  }>;
};

export type GetUserRelatedAuthorsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserRelatedAuthorsQuery = {
  __typename: 'Query';
  userRelatedAuthors: Array<{
    __typename: 'AuthorDto';
    id: number;
    name: string;
  }>;
};

export type GetUserBooksProgressLogsQueryVariables = Exact<{
  take: Scalars['NonNegativeInt'];
}>;

export type GetUserBooksProgressLogsQuery = {
  __typename: 'Query';
  userBookProgressLogs: Array<{
    __typename: 'BookProgressLogDto';
    id: number;
    percentage: number;
    updatedOn: DateTime;
    startedOn: DateTime;
    numPages: number;
    book: {
      __typename: 'BookDto';
      title: string;
      id: number;
      architects: Array<{
        __typename: 'ArchitectDto';
        author: { __typename: 'AuthorDto'; name: string };
      }>;
    };
  }>;
};

export type GetBooksForSearchPageQueryVariables = Exact<{
  input: BooksSearchInput;
}>;

export type GetBooksForSearchPageQuery = {
  __typename: 'Query';
  openLibraryBooksSearch:
    | { __typename: 'BooksSearchError'; message: string }
    | {
        __typename: 'OpenLibraryResponse';
        numFound: number;
        offset: number;
        docs: Array<{
          __typename: 'OpenLibraryWorkDto';
          authorName?: Array<string> | null | undefined;
          isbn?: Array<string> | null | undefined;
          key: string;
          language?: Array<string> | null | undefined;
          coverI?: string | null | undefined;
          title: string;
        }>;
      };
};

export type GetBookDetailsQueryVariables = Exact<{
  isbn: Scalars['ISBN'];
}>;

export type GetBookDetailsQuery = {
  __typename: 'Query';
  bookDetails:
    | {
        __typename: 'BookDto';
        id: number;
        description?: string | null | undefined;
        createdAt: DateTime;
        updatedAt: DateTime;
        isbn10: string;
        isbn13: string;
        title: string;
        architects: Array<{
          __typename: 'ArchitectDto';
          role: ArchitectRole;
          author: { __typename: 'AuthorDto'; id: number; name: string };
        }>;
        bookImages: Array<{
          __typename: 'BookImageDto';
          base64String: string;
          coverUrl: string;
        }>;
      }
    | { __typename: 'BooksDetailsError'; message: string };
};

export type BookDetailsFragment = {
  __typename: 'BookDto';
  id: number;
  description?: string | null | undefined;
  createdAt: DateTime;
  updatedAt: DateTime;
  isbn10: string;
  isbn13: string;
  title: string;
  architects: Array<{
    __typename: 'ArchitectDto';
    role: ArchitectRole;
    author: { __typename: 'AuthorDto'; id: number; name: string };
  }>;
  bookImages: Array<{
    __typename: 'BookImageDto';
    base64String: string;
    coverUrl: string;
  }>;
};

export const BookDetailsFragmentDoc = gql`
  fragment BookDetails on BookDto {
    id
    architects {
      author {
        id
        name
      }
      role
    }
    bookImages {
      base64String
      coverUrl
    }
    description
    createdAt
    updatedAt
    isbn10
    isbn13
    title
  }
`;
export const LoginUserDocument = gql`
  mutation LoginUser($issuer: String!) {
    loginUser(issuer: $issuer) {
      __typename
      ... on LoginResult {
        status
      }
      ... on LoginError {
        message
      }
    }
  }
`;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument
  );
}
export const CreateUserDocument = gql`
  mutation CreateUser($issuer: String!) {
    createUser(issuer: $issuer) {
      __typename
      ... on CreateUserError {
        message
      }
    }
  }
`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument
  );
}
export const CreateUserShelfDocument = gql`
  mutation CreateUserShelf($input: CreateUserShelfInput!) {
    createUserShelf(input: $input) {
      id
    }
  }
`;

export function useCreateUserShelfMutation() {
  return Urql.useMutation<
    CreateUserShelfMutation,
    CreateUserShelfMutationVariables
  >(CreateUserShelfDocument);
}
export const CheckUserByIssuerDocument = gql`
  query CheckUserByIssuer($issuer: String!) {
    checkUserByIssuer(issuer: $issuer)
  }
`;

export function useCheckUserByIssuerQuery(
  options: Omit<
    Urql.UseQueryArgs<CheckUserByIssuerQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<CheckUserByIssuerQuery>({
    query: CheckUserByIssuerDocument,
    ...options,
  });
}
export const GetUserRelatedBooksDocument = gql`
  query GetUserRelatedBooks {
    userRelatedBooks {
      title
      id
      architects {
        author {
          name
        }
        role
      }
    }
  }
`;

export function useGetUserRelatedBooksQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserRelatedBooksQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserRelatedBooksQuery>({
    query: GetUserRelatedBooksDocument,
    ...options,
  });
}
export const GetUserRelatedAuthorsDocument = gql`
  query GetUserRelatedAuthors {
    userRelatedAuthors {
      id
      name
    }
  }
`;

export function useGetUserRelatedAuthorsQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserRelatedAuthorsQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserRelatedAuthorsQuery>({
    query: GetUserRelatedAuthorsDocument,
    ...options,
  });
}
export const GetUserBooksProgressLogsDocument = gql`
  query GetUserBooksProgressLogs($take: NonNegativeInt!) {
    userBookProgressLogs(take: $take) {
      id
      percentage
      updatedOn
      startedOn
      numPages
      book {
        title
        id
        architects {
          author {
            name
          }
        }
      }
    }
  }
`;

export function useGetUserBooksProgressLogsQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserBooksProgressLogsQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserBooksProgressLogsQuery>({
    query: GetUserBooksProgressLogsDocument,
    ...options,
  });
}
export const GetBooksForSearchPageDocument = gql`
  query getBooksForSearchPage($input: BooksSearchInput!) {
    openLibraryBooksSearch(input: $input) {
      __typename
      ... on BooksSearchError {
        message
      }
      ... on OpenLibraryResponse {
        numFound
        offset
        docs {
          authorName
          isbn
          key
          language
          coverI
          title
        }
      }
    }
  }
`;

export function useGetBooksForSearchPageQuery(
  options: Omit<
    Urql.UseQueryArgs<GetBooksForSearchPageQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetBooksForSearchPageQuery>({
    query: GetBooksForSearchPageDocument,
    ...options,
  });
}
export const GetBookDetailsDocument = gql`
  query GetBookDetails($isbn: ISBN!) {
    bookDetails(isbn: $isbn) {
      ... on BooksDetailsError {
        message
      }
      ... on BookDto {
        ...BookDetails
      }
    }
  }
  ${BookDetailsFragmentDoc}
`;

export function useGetBookDetailsQuery(
  options: Omit<Urql.UseQueryArgs<GetBookDetailsQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetBookDetailsQuery>({
    query: GetBookDetailsDocument,
    ...options,
  });
}
