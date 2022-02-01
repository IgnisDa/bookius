import { gql } from 'urql';

export const LOGIN_USER = gql`
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

export const CREATE_USER = gql`
  mutation CreateUser($issuer: String!) {
    createUser(issuer: $issuer) {
      __typename
      ... on CreateUserError {
        message
      }
    }
  }
`;

export const CREATE_USER_SHELF = gql`
  mutation CreateUserShelf($input: CreateUserShelfInput!) {
    createUserShelf(input: $input) {
      id
    }
  }
`;

export const START_READING_BOOK = gql`
  mutation StartReadingBook($input: CreateBookProgressLogInput!) {
    createBookProgressLog(input: $input) {
      id
      status
      percentage
    }
  }
`;

export const UPDATE_BOOK_READING_PROGRESS = gql`
  mutation UpdateBookReadingProgress($input: UpdateBookProgressLogInput!) {
    updateBookProgressLog(input: $input)
  }
`;
