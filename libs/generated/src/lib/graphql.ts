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
  /** BigInt custom scalar type */
  BigInt: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
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
  architects: Array<ArchitectDto>;
  /** The date and time when this book was added to the service */
  createdAt: Scalars['DateTime'];
  /** A brief description of the author */
  description?: Maybe<Scalars['String']>;
  /** The primary key of the book */
  id: Scalars['BigInt'];
  /** Name of the book */
  title: Scalars['String'];
  /** The date and time when information about this book was last updated */
  updatedAt: Scalars['DateTime'];
};

/** Details about a book without their architect details */
export type BookDtoWithoutArchitect = {
  __typename: 'BookDtoWithoutArchitect';
  /** The date and time when this book was added to the service */
  createdAt: Scalars['DateTime'];
  /** A brief description of the author */
  description?: Maybe<Scalars['String']>;
  /** The primary key of the book */
  id: Scalars['BigInt'];
  /** Name of the book */
  title: Scalars['String'];
  /** The date and time when information about this book was last updated */
  updatedAt: Scalars['DateTime'];
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
  /** Get a list of all books */
  books: Array<BookDto>;
  /** Check whether a user with the given issuer exists in the database. */
  checkUserByIssuer: Scalars['Boolean'];
  /** Get status of the service. */
  getStatus: Scalars['Boolean'];
  /** Get a list of all shelves created by this user. */
  getUserShelves: Array<ShelfDto>;
};

export type QueryCheckUserByIssuerArgs = {
  issuer: Scalars['String'];
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
  description: Scalars['String'];
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
  /** The primary key of the user */
  id: Scalars['ID'];
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
    __typename: 'BookDto';
    id: any;
    title: string;
    architects: Array<{
      __typename: 'ArchitectDto';
      role: ArchitectRole;
      author: { __typename: 'AuthorDto'; name: string; id: any };
    }>;
  }>;
};

export type GetUserShelvesShortQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserShelvesShortQuery = {
  __typename: 'Query';
  getUserShelves: Array<{
    __typename: 'ShelfDto';
    name: string;
    isPublic: boolean;
    _count: { __typename: 'ShelfCountDto'; books: number };
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
  query getUserShelvesShort {
    getUserShelves {
      name
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
