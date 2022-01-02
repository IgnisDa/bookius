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
  BigInt: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
};

/** The standard interface that contains the error message when something goes wrong */
export type ApiError = {
  /** The error message giving details about what went wrong */
  message: Scalars['String'];
};

/** The role of a person in the complete production of a book */
export enum ArchitectRole {
  Author = 'AUTHOR',
  Illustrator = 'ILLUSTRATOR',
}

/** The people who have worked on a book */
export type ArchitectsOnBooks = {
  __typename: 'ArchitectsOnBooks';
  author: Author;
  authorId: Scalars['String'];
  book: Book;
  bookId: Scalars['String'];
  role: ArchitectRole;
};

export type ArchitectsOnBooksAvgAggregate = {
  __typename: 'ArchitectsOnBooksAvgAggregate';
  authorId?: Maybe<Scalars['Float']>;
  bookId?: Maybe<Scalars['Float']>;
};

export type ArchitectsOnBooksCountAggregate = {
  __typename: 'ArchitectsOnBooksCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  bookId: Scalars['Int'];
  role: Scalars['Int'];
};

export type ArchitectsOnBooksMaxAggregate = {
  __typename: 'ArchitectsOnBooksMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['String']>;
  role?: Maybe<ArchitectRole>;
};

export type ArchitectsOnBooksMinAggregate = {
  __typename: 'ArchitectsOnBooksMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['String']>;
  role?: Maybe<ArchitectRole>;
};

export type ArchitectsOnBooksSumAggregate = {
  __typename: 'ArchitectsOnBooksSumAggregate';
  authorId?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['String']>;
};

/** This model will keep track of authors that will be made available to the users */
export type Author = {
  __typename: 'Author';
  _count: AuthorCount;
  bio?: Maybe<Scalars['String']>;
  books?: Maybe<Array<ArchitectsOnBooks>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['BigInt'];
  name: Scalars['String'];
  openLibraryKey: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthorAvgAggregate = {
  __typename: 'AuthorAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AuthorCount = {
  __typename: 'AuthorCount';
  books: Scalars['Int'];
};

export type AuthorCountAggregate = {
  __typename: 'AuthorCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  openLibraryKey: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AuthorMaxAggregate = {
  __typename: 'AuthorMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  openLibraryKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorMinAggregate = {
  __typename: 'AuthorMinAggregate';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  openLibraryKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorSumAggregate = {
  __typename: 'AuthorSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

/** This model will keep track of books that will be made available to the users */
export type Book = {
  __typename: 'Book';
  BookProgressLog?: Maybe<Array<BookProgressLog>>;
  _count: BookCount;
  architects?: Maybe<Array<ArchitectsOnBooks>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  isbn: Scalars['String'];
  shelves?: Maybe<Array<Shelf>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BookAvgAggregate = {
  __typename: 'BookAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type BookCount = {
  __typename: 'BookCount';
  BookProgressLog: Scalars['Int'];
  architects: Scalars['Int'];
  shelves: Scalars['Int'];
};

export type BookCountAggregate = {
  __typename: 'BookCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  isbn: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

/** Details about a book without their architect details */
export type BookDtoWithoutArchitect = {
  __typename: 'BookDtoWithoutArchitect';
  BookProgressLog?: Maybe<Array<BookProgressLog>>;
  _count: BookCount;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  isbn: Scalars['String'];
  shelves?: Maybe<Array<Shelf>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BookMaxAggregate = {
  __typename: 'BookMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isbn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookMinAggregate = {
  __typename: 'BookMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isbn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Model to track a user's reading progress with a particular book */
export type BookProgressLog = {
  __typename: 'BookProgressLog';
  book: Book;
  bookId: Scalars['String'];
  id: Scalars['BigInt'];
  numPages: Scalars['Int'];
  /** Face value, so if a book is 82% complete, this value will be `82.00` */
  percentage: Scalars['Decimal'];
  startedOn: Scalars['DateTime'];
  updatedOn: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type BookProgressLogAvgAggregate = {
  __typename: 'BookProgressLogAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  numPages?: Maybe<Scalars['Float']>;
  percentage?: Maybe<Scalars['Decimal']>;
};

export type BookProgressLogCountAggregate = {
  __typename: 'BookProgressLogCountAggregate';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  id: Scalars['Int'];
  numPages: Scalars['Int'];
  percentage: Scalars['Int'];
  startedOn: Scalars['Int'];
  updatedOn: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookProgressLogMaxAggregate = {
  __typename: 'BookProgressLogMaxAggregate';
  bookId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  numPages?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Decimal']>;
  startedOn?: Maybe<Scalars['DateTime']>;
  updatedOn?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookProgressLogMinAggregate = {
  __typename: 'BookProgressLogMinAggregate';
  bookId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  numPages?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Decimal']>;
  startedOn?: Maybe<Scalars['DateTime']>;
  updatedOn?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookProgressLogSumAggregate = {
  __typename: 'BookProgressLogSumAggregate';
  bookId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  numPages?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Decimal']>;
};

export type BookSumAggregate = {
  __typename: 'BookSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

/** Type returned for the error when a new user is created. */
export type CreateUserError = {
  __typename: 'CreateUserError';
  /** General errors relating to the registration attempt */
  message?: Maybe<Scalars['String']>;
};

/** Result type returned as the result when new user is created. */
export type CreateUserResultUnion = CreateUserError | UserDto;

/** The input type used to create a new shelf */
export type CreateUserShelfInput = {
  /** A description of the new shelf */
  description?: InputMaybe<Scalars['String']>;
  /** Whether the shelf will be publicly available */
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

export type Query = {
  __typename: 'Query';
  /** Get a list of all books in the service. */
  books: Array<Book>;
  /** Check whether a user with the given issuer exists in the database. */
  checkUserByIssuer: Scalars['Boolean'];
  /** Get status of the service. */
  getStatus: Scalars['Boolean'];
  /** Get list of book progresses that are related to the user. */
  userBookProgressLogs: Array<BookProgressLog>;
  /** Get a small list of authors that are related to the user. */
  userRelatedAuthors: Array<Author>;
  /** Get a small list of books that are related to the user. */
  userRelatedBooks: Array<Book>;
  /** Get a list of all shelves created by this user. */
  userShelves: Array<ShelfDto>;
};

export type QueryCheckUserByIssuerArgs = {
  issuer: Scalars['String'];
};

export type QueryUserBookProgressLogsArgs = {
  take?: InputMaybe<Scalars['Int']>;
};

/** A shelf is created by users to collect a number of books together */
export type Shelf = {
  __typename: 'Shelf';
  _count: ShelfCount;
  books?: Maybe<Array<Book>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ShelfCount = {
  __typename: 'ShelfCount';
  books: Scalars['Int'];
};

export type ShelfCountAggregate = {
  __typename: 'ShelfCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  isPublic: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
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

export type ShelfMaxAggregate = {
  __typename: 'ShelfMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfMinAggregate = {
  __typename: 'ShelfMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

/** This model will represent a user of the service. */
export type User = {
  __typename: 'User';
  BookProgressLog?: Maybe<Array<BookProgressLog>>;
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issuer: Scalars['String'];
  profile?: Maybe<UserProfile>;
  shelves?: Maybe<Array<Shelf>>;
};

export type UserCount = {
  __typename: 'UserCount';
  BookProgressLog: Scalars['Int'];
  shelves: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  issuer: Scalars['Int'];
};

/** Critical details about a user of the service */
export type UserDto = {
  __typename: 'UserDto';
  /** The primary key of the user */
  id: Scalars['ID'];
};

export type UserMaxAggregate = {
  __typename: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
};

/** This model will track profile information about the user */
export type UserProfile = {
  __typename: 'UserProfile';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type UserProfileAvgAggregate = {
  __typename: 'UserProfileAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  countryId?: Maybe<Scalars['Float']>;
};

export type UserProfileCountAggregate = {
  __typename: 'UserProfileCountAggregate';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  bio: Scalars['Int'];
  countryId: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserProfileMaxAggregate = {
  __typename: 'UserProfileMaxAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserProfileMinAggregate = {
  __typename: 'UserProfileMinAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserProfileSumAggregate = {
  __typename: 'UserProfileSumAggregate';
  age?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
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

export type GetStatusQueryVariables = Exact<{ [key: string]: never }>;

export type GetStatusQuery = { __typename: 'Query'; getStatus: boolean };

export type CheckUserByIssuerQueryVariables = Exact<{
  issuer: Scalars['String'];
}>;

export type CheckUserByIssuerQuery = {
  __typename: 'Query';
  checkUserByIssuer: boolean;
};

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBooksQuery = {
  __typename: 'Query';
  books: Array<{
    __typename: 'Book';
    id: any;
    title: string;
    architects?:
      | Array<{
          __typename: 'ArchitectsOnBooks';
          role: ArchitectRole;
          author: { __typename: 'Author'; name: string; id: any };
        }>
      | null
      | undefined;
  }>;
};

export type GetUserShelvesShortQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserShelvesShortQuery = {
  __typename: 'Query';
  userShelves: Array<{
    __typename: 'ShelfDto';
    name: string;
    id: string;
    isPublic: boolean;
    _count: { __typename: 'ShelfCountDto'; books: number };
  }>;
};

export type GetUserRelatedBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserRelatedBooksQuery = {
  __typename: 'Query';
  userRelatedBooks: Array<{
    __typename: 'Book';
    title: string;
    id: any;
    architects?:
      | Array<{
          __typename: 'ArchitectsOnBooks';
          role: ArchitectRole;
          author: { __typename: 'Author'; name: string };
        }>
      | null
      | undefined;
  }>;
};

export type GetUserRelatedAuthorsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserRelatedAuthorsQuery = {
  __typename: 'Query';
  userRelatedAuthors: Array<{ __typename: 'Author'; id: any; name: string }>;
};

export type GetUserBooksProgressLogsQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
}>;

export type GetUserBooksProgressLogsQuery = {
  __typename: 'Query';
  userBookProgressLogs: Array<{
    __typename: 'BookProgressLog';
    id: any;
    percentage: any;
    updatedOn: any;
    startedOn: any;
    numPages: number;
    book: {
      __typename: 'Book';
      title: string;
      id: any;
      architects?:
        | Array<{
            __typename: 'ArchitectsOnBooks';
            author: { __typename: 'Author'; name: string };
          }>
        | null
        | undefined;
    };
  }>;
};

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
export const GetStatusDocument = gql`
  query GetStatus {
    getStatus
  }
`;

export function useGetStatusQuery(
  options: Omit<Urql.UseQueryArgs<GetStatusQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetStatusQuery>({
    query: GetStatusDocument,
    ...options,
  });
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
export const GetAllBooksDocument = gql`
  query GetAllBooks {
    books {
      id
      title
      architects {
        author {
          name
          id
        }
        role
      }
    }
  }
`;

export function useGetAllBooksQuery(
  options: Omit<Urql.UseQueryArgs<GetAllBooksQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetAllBooksQuery>({
    query: GetAllBooksDocument,
    ...options,
  });
}
export const GetUserShelvesShortDocument = gql`
  query GetUserShelvesShort {
    userShelves {
      name
      id
      isPublic
      _count {
        books
      }
    }
  }
`;

export function useGetUserShelvesShortQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserShelvesShortQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserShelvesShortQuery>({
    query: GetUserShelvesShortDocument,
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
  query GetUserBooksProgressLogs($take: Int) {
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
