import { gql } from 'urql';

export const CHECK_USER_BY_ISSUER = gql`
  query CheckUserByIssuer($issuer: String!) {
    checkUserByIssuer(issuer: $issuer)
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
        bookImages {
          coverUrl
          base64String
        }
        openLibraryKeys
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
  query GetBooksForSearchPage($input: BooksSearchInput!) {
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
          editionKey
        }
      }
    }
  }
`;

export const BOOK_DETAILS_FRAGMENT = gql`
  fragment BookDetails on BookDto {
    id
    architects {
      author {
        id
        name
      }
      role
    }
    publishers
    publishDate
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

export const GET_BOOK_DETAILS_BY_ISBN_FROM_OPEN_LIBRARY = gql`
  ${BOOK_DETAILS_FRAGMENT}
  query GetBookDetailsByISBN($isbn: ISBN!) {
    bookDetailsByIsbn(isbn: $isbn) {
      ... on BooksDetailsError {
        message
      }
      ... on BookDto {
        ...BookDetails
      }
    }
  }
`;

export const GET_BOOK_DETAILS_BY_OLID_FROM_OPEN_LIBRARY = gql`
  ${BOOK_DETAILS_FRAGMENT}
  query GetBookDetailsByOlid($key: String!) {
    bookDetailsByOlid(key: $key) {
      ... on BooksDetailsError {
        message
      }
      ... on BookDto {
        ...BookDetails
      }
    }
  }
`;

export const GET_PARTICULAR_BOOK_PROGRESS_LOGS = gql`
  query GetParticularBookProgressLogs($bookId: BigInt!) {
    userParticularBookProgressLogs(bookId: $bookId) {
      id
      status
      percentage
      startedOn
      updatedOn
    }
  }
`;

export const GET_BOOK_STATISTICS = gql`
  query GetBookStatistics($bookId: BigInt!) {
    bookStatistics(bookId: $bookId) {
      readBy
      addedToShelves
    }
  }
`;

export const GET_USER_SHELVES = gql`
  query GetUserShelves($take: NonNegativeInt!) {
    getUserShelves(take: $take) {
      name
      id
      booksInThisShelf {
        book {
          id
        }
      }
    }
  }
`;
