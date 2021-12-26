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
};

/** The standard interface that contains the error message when something goes wrong */
export type ApiError = {
  /** The error message giving details about what went wrong */
  message: Scalars['String'];
};

/** Type returned for the error when a new user is created. */
export type CreateUserError = {
  __typename: 'CreateUserError';
  /** General errors relating to the registration attempt */
  message?: Maybe<Scalars['String']>;
  /** Whether a user with this username already exists */
  userExists: Scalars['Boolean'];
};

/** Result type returned as the result when new user is created. */
export type CreateUserResultUnion = CreateUserError | UserDto;

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
  /** Login using an authentication token. */
  loginUser: LoginResultUnion;
};

export type MutationCreateUserArgs = {
  DIDToken: Scalars['String'];
};

export type MutationLoginUserArgs = {
  DIDToken: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  /** Get status of the service. */
  getStatus: Scalars['Boolean'];
};

/** Critical details about a user of the service */
export type UserDto = {
  __typename: 'UserDto';
  /** The primary key of the user */
  id: Scalars['ID'];
};

export type LoginUserMutationVariables = Exact<{
  DIDToken: Scalars['String'];
}>;

export type LoginUserMutation = {
  __typename: 'Mutation';
  loginUser:
    | { __typename: 'LoginError'; message: string }
    | {
        __typename: 'LoginResult';
        status: boolean;
        user: { __typename: 'UserDto'; id: string };
      };
};

export type CreateUserMutationVariables = Exact<{
  DIDToken: Scalars['String'];
}>;

export type CreateUserMutation = {
  __typename: 'Mutation';
  createUser:
    | {
        __typename: 'CreateUserError';
        userExists: boolean;
        message?: string | null | undefined;
      }
    | { __typename: 'UserDto'; id: string };
};

export type GetStatusQueryVariables = Exact<{ [key: string]: never }>;

export type GetStatusQuery = { __typename: 'Query'; getStatus: boolean };

export const LoginUserDocument = gql`
  mutation LoginUser($DIDToken: String!) {
    loginUser(DIDToken: $DIDToken) {
      __typename
      ... on LoginResult {
        status
        user {
          id
        }
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
  mutation CreateUser($DIDToken: String!) {
    createUser(DIDToken: $DIDToken) {
      __typename
      ... on UserDto {
        id
      }
      ... on CreateUserError {
        userExists
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
