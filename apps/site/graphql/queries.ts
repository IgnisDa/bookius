import { gql } from 'urql';

export const CHECK_USER_BY_ISSUER = gql`
  query CheckUserByIssuer($issuer: String!) {
    checkUserByIssuer(issuer: $issuer)
  }
`;

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    filterBooks {
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
    filterUserShelves {
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

export const GET_BOOKS_FOR_SEARCH_PAGE = gql`
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

export const GET_BOOK_DETAILS_FROM_OPEN_LIBRARY = gql`
  query GetBookDetailsFromOpenLibrary($possibleIsbn: [String!]!) {
    openLibraryWorkDetails(possibleIsbn: $possibleIsbn) {
      __typename
      ... on BooksSearchError {
        message
      }
      ... on OpenLibraryWorkDetailsDto {
        key
        authors {
          key
          name
        }
        covers
        isbn13
        isbn10
        numberOfPages
        publishDate
        publishers
        title
        blurImageBase64Strings
      }
    }
  }
`;
