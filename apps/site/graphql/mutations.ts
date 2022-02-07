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

export const ADD_BOOK_TO_SHELF = gql`
  mutation AddBookToShelf($input: AddBookToShelfInput!) {
    addBookToShelf(input: $input) {
      __typename
      ... on AddBookToShelfError {
        message
      }
    }
  }
`;

export const REMOVE_BOOK_FROM_SHELF = gql`
  mutation RemoveBookFromShelf($input: RemoveBookToShelfInput!) {
    removeBookFromShelf(input: $input) {
      __typename
      ... on RemoveBookToShelfResult {
        noop
      }
      ... on RemoveBookToShelfError {
        message
      }
    }
  }
`;
