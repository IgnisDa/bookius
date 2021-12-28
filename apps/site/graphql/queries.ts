import { gql } from 'urql';

export const GET_STATUS = gql`
  query GetStatus {
    getStatus
  }
`;

export const CHECK_USER_BY_ISSUER = gql`
  query CheckUserByIssuer($issuer: String!) {
    checkUserByIssuer(issuer: $issuer)
  }
`;

export const GET_ALL_BOOKS = gql`
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

export const GET_USER_SHELVES_SHORT = gql`
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
