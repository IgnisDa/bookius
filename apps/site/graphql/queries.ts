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

export const GET_USER_RELATED_BOOKS = gql`
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

export const GET_USER_RELATED_AUTHORS = gql`
  query GetUserRelatedAuthors {
    userRelatedAuthors {
      id
      name
    }
  }
`;

export const GET_USER_BOOKS_PROGRESS_LOGS = gql`
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
