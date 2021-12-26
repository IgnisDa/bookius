import { gql } from 'urql';

export const LOGIN_USER = gql`
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

export const CREATE_USER = gql`
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
