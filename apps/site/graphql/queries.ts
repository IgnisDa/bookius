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
  query GetBookDetails($isbn: ISBN!) {
    bookDetails(isbn: $isbn) {
      ... on BooksDetailsError {
        message
      }
      ... on BookDto {
        ...BookDetails
      }
    }
  }

  fragment BookDetails on BookDto {
    id
    architects {
      author {
        id
        name
      }
      role
    }
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
