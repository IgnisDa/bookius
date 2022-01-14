import { DateTime } from 'luxon';
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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: DateTime;
  /** An arbitrary-precision Decimal type */
  Decimal: number;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: string;
};

/** The standard interface that contains the error message when something goes wrong */
export type ApiError = {
  /** The error message giving details about what went wrong */
  message: Scalars['String'];
};

/** The role of a person in the complete production of a book */
export enum ArchitectRole {
  Author = 'AUTHOR',
  Illustrator = 'ILLUSTRATOR',
}

/** The people who have worked on a book */
export type ArchitectsOnBooks = {
  __typename: 'ArchitectsOnBooks';
  author: Author;
  authorId: Scalars['BigInt'];
  book: Book;
  bookId: Scalars['BigInt'];
  role: ArchitectRole;
};

export type ArchitectsOnBooksAvgAggregate = {
  __typename: 'ArchitectsOnBooksAvgAggregate';
  authorId?: Maybe<Scalars['Float']>;
  bookId?: Maybe<Scalars['Float']>;
};

export type ArchitectsOnBooksCountAggregate = {
  __typename: 'ArchitectsOnBooksCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  bookId: Scalars['Int'];
  role: Scalars['Int'];
};

export type ArchitectsOnBooksListRelationFilter = {
  every?: InputMaybe<ArchitectsOnBooksWhereInput>;
  none?: InputMaybe<ArchitectsOnBooksWhereInput>;
  some?: InputMaybe<ArchitectsOnBooksWhereInput>;
};

export type ArchitectsOnBooksMaxAggregate = {
  __typename: 'ArchitectsOnBooksMaxAggregate';
  authorId?: Maybe<Scalars['BigInt']>;
  bookId?: Maybe<Scalars['BigInt']>;
  role?: Maybe<ArchitectRole>;
};

export type ArchitectsOnBooksMinAggregate = {
  __typename: 'ArchitectsOnBooksMinAggregate';
  authorId?: Maybe<Scalars['BigInt']>;
  bookId?: Maybe<Scalars['BigInt']>;
  role?: Maybe<ArchitectRole>;
};

export type ArchitectsOnBooksOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ArchitectsOnBooksSumAggregate = {
  __typename: 'ArchitectsOnBooksSumAggregate';
  authorId?: Maybe<Scalars['BigInt']>;
  bookId?: Maybe<Scalars['BigInt']>;
};

export type ArchitectsOnBooksWhereInput = {
  AND?: InputMaybe<Array<ArchitectsOnBooksWhereInput>>;
  NOT?: InputMaybe<Array<ArchitectsOnBooksWhereInput>>;
  OR?: InputMaybe<Array<ArchitectsOnBooksWhereInput>>;
  author?: InputMaybe<AuthorRelationFilter>;
  authorId?: InputMaybe<BigIntFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<BigIntFilter>;
  role?: InputMaybe<EnumArchitectRoleFilter>;
};

/** This model will keep track of authors that will be made available to the users */
export type Author = {
  __typename: 'Author';
  _count: AuthorCount;
  bio?: Maybe<Scalars['String']>;
  books?: Maybe<Array<ArchitectsOnBooks>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['BigInt'];
  name: Scalars['String'];
  openLibraryKey: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthorAvgAggregate = {
  __typename: 'AuthorAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AuthorCount = {
  __typename: 'AuthorCount';
  books: Scalars['Int'];
};

export type AuthorCountAggregate = {
  __typename: 'AuthorCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  openLibraryKey: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AuthorMaxAggregate = {
  __typename: 'AuthorMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  openLibraryKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorMinAggregate = {
  __typename: 'AuthorMinAggregate';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  openLibraryKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorRelationFilter = {
  is?: InputMaybe<AuthorWhereInput>;
  isNot?: InputMaybe<AuthorWhereInput>;
};

export type AuthorSumAggregate = {
  __typename: 'AuthorSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type AuthorWhereInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  bio?: InputMaybe<StringNullableFilter>;
  books?: InputMaybe<ArchitectsOnBooksListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  openLibraryKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** This model will keep track of books that will be made available to the users */
export type Book = {
  __typename: 'Book';
  BookProgressLog?: Maybe<Array<BookProgressLog>>;
  _count: BookCount;
  architects?: Maybe<Array<ArchitectsOnBooks>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  isbn: Scalars['String'];
  shelves?: Maybe<Array<Shelf>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BookAvgAggregate = {
  __typename: 'BookAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type BookCount = {
  __typename: 'BookCount';
  BookProgressLog: Scalars['Int'];
  architects: Scalars['Int'];
  shelves: Scalars['Int'];
};

export type BookCountAggregate = {
  __typename: 'BookCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  isbn: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type BookListRelationFilter = {
  every?: InputMaybe<BookWhereInput>;
  none?: InputMaybe<BookWhereInput>;
  some?: InputMaybe<BookWhereInput>;
};

export type BookMaxAggregate = {
  __typename: 'BookMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isbn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookMinAggregate = {
  __typename: 'BookMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isbn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  BookProgressLog?: InputMaybe<BookProgressLogOrderByRelationAggregateInput>;
  architects?: InputMaybe<ArchitectsOnBooksOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  shelves?: InputMaybe<ShelfOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Model to track a user's reading progress with a particular book */
export type BookProgressLog = {
  __typename: 'BookProgressLog';
  book: Book;
  bookId: Scalars['BigInt'];
  id: Scalars['BigInt'];
  numPages: Scalars['Int'];
  /** Face value, so if a book is 82% complete, this value will be `82.00` */
  percentage: Scalars['Decimal'];
  startedOn: Scalars['DateTime'];
  updatedOn: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type BookProgressLogAvgAggregate = {
  __typename: 'BookProgressLogAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  numPages?: Maybe<Scalars['Float']>;
  percentage?: Maybe<Scalars['Decimal']>;
};

export type BookProgressLogCountAggregate = {
  __typename: 'BookProgressLogCountAggregate';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  id: Scalars['Int'];
  numPages: Scalars['Int'];
  percentage: Scalars['Int'];
  startedOn: Scalars['Int'];
  updatedOn: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookProgressLogListRelationFilter = {
  every?: InputMaybe<BookProgressLogWhereInput>;
  none?: InputMaybe<BookProgressLogWhereInput>;
  some?: InputMaybe<BookProgressLogWhereInput>;
};

export type BookProgressLogMaxAggregate = {
  __typename: 'BookProgressLogMaxAggregate';
  bookId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  numPages?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Decimal']>;
  startedOn?: Maybe<Scalars['DateTime']>;
  updatedOn?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookProgressLogMinAggregate = {
  __typename: 'BookProgressLogMinAggregate';
  bookId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  numPages?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Decimal']>;
  startedOn?: Maybe<Scalars['DateTime']>;
  updatedOn?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookProgressLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookProgressLogSumAggregate = {
  __typename: 'BookProgressLogSumAggregate';
  bookId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  numPages?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Decimal']>;
};

export type BookProgressLogWhereInput = {
  AND?: InputMaybe<Array<BookProgressLogWhereInput>>;
  NOT?: InputMaybe<Array<BookProgressLogWhereInput>>;
  OR?: InputMaybe<Array<BookProgressLogWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  numPages?: InputMaybe<IntFilter>;
  percentage?: InputMaybe<DecimalFilter>;
  startedOn?: InputMaybe<DateTimeFilter>;
  updatedOn?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export enum BookScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Isbn = 'isbn',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type BookSumAggregate = {
  __typename: 'BookSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  BookProgressLog?: InputMaybe<BookProgressLogListRelationFilter>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  architects?: InputMaybe<ArchitectsOnBooksListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  isbn?: InputMaybe<StringFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** The result returned when a client tries to get details about a particular book */
export type BooksDetailsResultUnion =
  | BooksSearchError
  | OpenLibraryWorkDetailsDto;

/** The object returned when there is an error while performing the search */
export type BooksSearchError = ApiError & {
  __typename: 'BooksSearchError';
  /** The error encountered while executing this query */
  message: Scalars['String'];
};

/** The input type used to search for books */
export type BooksSearchInput = {
  /** The position in the collection at which to start the list of results */
  offset?: InputMaybe<Scalars['Int']>;
  /** Full-text query string, should be URI **decoded** */
  query: Scalars['String'];
};

/** The result returned when a client tries to search for a book */
export type BooksSearchResultUnion = BooksSearchError | OpenLibraryResponse;

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

/** Type returned for the error when a new user is created. */
export type CreateUserError = {
  __typename: 'CreateUserError';
  /** General errors relating to the registration attempt */
  message?: Maybe<Scalars['String']>;
};

/** Result type returned as the result when new user is created. */
export type CreateUserResultUnion = CreateUserError | UserDto;

export type CreateUserShelfInput = {
  description?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type EnumArchitectRoleFilter = {
  equals?: InputMaybe<ArchitectRole>;
  in?: InputMaybe<Array<ArchitectRole>>;
  not?: InputMaybe<NestedEnumArchitectRoleFilter>;
  notIn?: InputMaybe<Array<ArchitectRole>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
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
  createUserShelf: Shelf;
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

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedEnumArchitectRoleFilter = {
  equals?: InputMaybe<ArchitectRole>;
  in?: InputMaybe<Array<ArchitectRole>>;
  not?: InputMaybe<NestedEnumArchitectRoleFilter>;
  notIn?: InputMaybe<Array<ArchitectRole>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** The response object when communicating with the Open Library API */
export type OpenLibraryResponse = {
  __typename: 'OpenLibraryResponse';
  /** The documents returned by the API */
  docs: Array<OpenLibraryWorkDto>;
  /** Number of results found for the query */
  numFound: Scalars['Int'];
  /** The offset for the query */
  offset: Scalars['Int'];
};

/** An author of a book */
export type OpenLibraryWorkAuthorDto = {
  __typename: 'OpenLibraryWorkAuthorDto';
  /** A unique key assigned to this author */
  key: Scalars['String'];
  /** Name of the author */
  name: Scalars['String'];
};

/** A work from the Open Library API */
export type OpenLibraryWorkDetailsDto = {
  __typename: 'OpenLibraryWorkDetailsDto';
  /** A list of authors of this book */
  authors?: Maybe<Array<OpenLibraryWorkAuthorDto>>;
  /** Very blurred base64 encoded images for each cover */
  blurImageBase64Strings?: Maybe<Array<Scalars['String']>>;
  /** Cover image links for the book */
  covers?: Maybe<Array<Scalars['String']>>;
  /** Unique Industry Identifiers for the book */
  isbn10?: Maybe<Array<Scalars['String']>>;
  /** Unique Industry Identifiers for the book */
  isbn13?: Maybe<Array<Scalars['String']>>;
  /** Number of pages in the book */
  numberOfPages?: Maybe<Scalars['Int']>;
  /** The date on which the book was published */
  publishDate?: Maybe<Scalars['String']>;
  /** The names of the publishers */
  publishers?: Maybe<Array<Scalars['String']>>;
  /** A list of subjects this book is related to */
  subjects?: Maybe<Array<Scalars['String']>>;
  /** Title of the book */
  title: Scalars['String'];
};

/** A volume from the Open Library API */
export type OpenLibraryWorkDto = {
  __typename: 'OpenLibraryWorkDto';
  /** Names of the author of the book */
  authorName?: Maybe<Array<Scalars['String']>>;
  /** Cover image ID for the book */
  coverI?: Maybe<Scalars['String']>;
  /** Unique Industry Identifiers for the book */
  isbn?: Maybe<Array<Scalars['String']>>;
  /** The open library unique ID */
  key: Scalars['String'];
  /** The language the book is written in */
  language?: Maybe<Array<Scalars['String']>>;
  /** Title of the book */
  title: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  /** Check whether a user with the given issuer exists in the database. */
  checkUserByIssuer: Scalars['Boolean'];
  /** Get a filtered list of all books in the service. */
  filterBooks: Array<Book>;
  /** Get a list of all shelves created by this user. */
  filterUserShelves: Array<Shelf>;
  /** Get a list of books related to a search query from Open Library API. */
  openLibraryBooksSearch: BooksSearchResultUnion;
  /** Get details about a particular work from the Open Library API. */
  openLibraryWorkDetails: BooksDetailsResultUnion;
  /** Get list of book progresses that are related to the user. */
  userBookProgressLogs: Array<BookProgressLog>;
  /** Get a small list of authors that are related to the user. */
  userRelatedAuthors: Array<Author>;
  /** Get a small list of books that are related to the user. */
  userRelatedBooks: Array<Book>;
};

export type QueryCheckUserByIssuerArgs = {
  issuer: Scalars['String'];
};

export type QueryFilterBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};

export type QueryFilterUserShelvesArgs = {
  cursor?: InputMaybe<ShelfWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShelfScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShelfOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShelfWhereInput>;
};

export type QueryOpenLibraryBooksSearchArgs = {
  input: BooksSearchInput;
};

export type QueryOpenLibraryWorkDetailsArgs = {
  isbn: Scalars['String'];
};

export type QueryUserBookProgressLogsArgs = {
  take?: InputMaybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

/** A shelf is created by users to collect a number of books together */
export type Shelf = {
  __typename: 'Shelf';
  _count: ShelfCount;
  books?: Maybe<Array<Book>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ShelfCount = {
  __typename: 'ShelfCount';
  books: Scalars['Int'];
};

export type ShelfCountAggregate = {
  __typename: 'ShelfCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  isPublic: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShelfListRelationFilter = {
  every?: InputMaybe<ShelfWhereInput>;
  none?: InputMaybe<ShelfWhereInput>;
  some?: InputMaybe<ShelfWhereInput>;
};

export type ShelfMaxAggregate = {
  __typename: 'ShelfMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfMinAggregate = {
  __typename: 'ShelfMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShelfOrderByWithRelationInput = {
  books?: InputMaybe<BookOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ShelfScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  IsPublic = 'isPublic',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type ShelfWhereInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  books?: InputMaybe<BookListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isPublic?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** This model will represent a user of the service. */
export type User = {
  __typename: 'User';
  BookProgressLog?: Maybe<Array<BookProgressLog>>;
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issuer: Scalars['String'];
  profile?: Maybe<UserProfile>;
  shelves?: Maybe<Array<Shelf>>;
};

export type UserCount = {
  __typename: 'UserCount';
  BookProgressLog: Scalars['Int'];
  shelves: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  issuer: Scalars['Int'];
};

/** Critical details about a user of the service */
export type UserDto = {
  __typename: 'UserDto';
  id: Scalars['ID'];
};

export type UserMaxAggregate = {
  __typename: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  BookProgressLog?: InputMaybe<BookProgressLogOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuer?: InputMaybe<SortOrder>;
  profile?: InputMaybe<UserProfileOrderByWithRelationInput>;
  shelves?: InputMaybe<ShelfOrderByRelationAggregateInput>;
};

/** This model will track profile information about the user */
export type UserProfile = {
  __typename: 'UserProfile';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  email: Scalars['EmailAddress'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type UserProfileAvgAggregate = {
  __typename: 'UserProfileAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  countryId?: Maybe<Scalars['Float']>;
};

export type UserProfileCountAggregate = {
  __typename: 'UserProfileCountAggregate';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  bio: Scalars['Int'];
  countryId: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserProfileMaxAggregate = {
  __typename: 'UserProfileMaxAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserProfileMinAggregate = {
  __typename: 'UserProfileMinAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['UUID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserProfileOrderByWithRelationInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  countryId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserProfileRelationFilter = {
  is?: InputMaybe<UserProfileWhereInput>;
  isNot?: InputMaybe<UserProfileWhereInput>;
};

export type UserProfileSumAggregate = {
  __typename: 'UserProfileSumAggregate';
  age?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
};

export type UserProfileWhereInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  age?: InputMaybe<IntNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  countryId?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  BookProgressLog?: InputMaybe<BookProgressLogListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  issuer?: InputMaybe<StringFilter>;
  profile?: InputMaybe<UserProfileRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
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
  createUserShelf: { __typename: 'Shelf'; id: string };
};

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
  filterBooks: Array<{
    __typename: 'Book';
    id: number;
    title: string;
    architects?:
      | Array<{
          __typename: 'ArchitectsOnBooks';
          role: ArchitectRole;
          author: { __typename: 'Author'; name: string; id: number };
        }>
      | null
      | undefined;
  }>;
};

export type GetUserShelvesShortQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserShelvesShortQuery = {
  __typename: 'Query';
  filterUserShelves: Array<{
    __typename: 'Shelf';
    name: string;
    id: string;
    isPublic: boolean;
    _count: { __typename: 'ShelfCount'; books: number };
  }>;
};

export type GetUserRelatedBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserRelatedBooksQuery = {
  __typename: 'Query';
  userRelatedBooks: Array<{
    __typename: 'Book';
    title: string;
    id: number;
    architects?:
      | Array<{
          __typename: 'ArchitectsOnBooks';
          role: ArchitectRole;
          author: { __typename: 'Author'; name: string };
        }>
      | null
      | undefined;
  }>;
};

export type GetUserRelatedAuthorsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserRelatedAuthorsQuery = {
  __typename: 'Query';
  userRelatedAuthors: Array<{ __typename: 'Author'; id: number; name: string }>;
};

export type GetUserBooksProgressLogsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
}>;

export type GetUserBooksProgressLogsQuery = {
  __typename: 'Query';
  userBookProgressLogs: Array<{
    __typename: 'BookProgressLog';
    id: number;
    percentage: number;
    updatedOn: DateTime;
    startedOn: DateTime;
    numPages: number;
    book: {
      __typename: 'Book';
      title: string;
      id: number;
      architects?:
        | Array<{
            __typename: 'ArchitectsOnBooks';
            author: { __typename: 'Author'; name: string };
          }>
        | null
        | undefined;
    };
  }>;
};

export type GetBooksForSearchPageQueryVariables = Exact<{
  input: BooksSearchInput;
}>;

export type GetBooksForSearchPageQuery = {
  __typename: 'Query';
  openLibraryBooksSearch:
    | { __typename: 'BooksSearchError'; message: string }
    | {
        __typename: 'OpenLibraryResponse';
        numFound: number;
        offset: number;
        docs: Array<{
          __typename: 'OpenLibraryWorkDto';
          authorName?: Array<string> | null | undefined;
          isbn?: Array<string> | null | undefined;
          key: string;
          language?: Array<string> | null | undefined;
          coverI?: string | null | undefined;
          title: string;
        }>;
      };
};

export type GetBookDetailsFromOpenLibraryQueryVariables = Exact<{
  isbn: Scalars['String'];
}>;

export type GetBookDetailsFromOpenLibraryQuery = {
  __typename: 'Query';
  openLibraryWorkDetails:
    | { __typename: 'BooksSearchError'; message: string }
    | {
        __typename: 'OpenLibraryWorkDetailsDto';
        covers?: Array<string> | null | undefined;
        isbn13?: Array<string> | null | undefined;
        isbn10?: Array<string> | null | undefined;
        numberOfPages?: number | null | undefined;
        publishDate?: string | null | undefined;
        publishers?: Array<string> | null | undefined;
        title: string;
        blurImageBase64Strings?: Array<string> | null | undefined;
        authors?:
          | Array<{
              __typename: 'OpenLibraryWorkAuthorDto';
              key: string;
              name: string;
            }>
          | null
          | undefined;
      };
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

export function useGetAllBooksQuery(
  options: Omit<Urql.UseQueryArgs<GetAllBooksQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetAllBooksQuery>({
    query: GetAllBooksDocument,
    ...options,
  });
}
export const GetUserShelvesShortDocument = gql`
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
export const GetUserRelatedBooksDocument = gql`
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

export function useGetUserRelatedBooksQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserRelatedBooksQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserRelatedBooksQuery>({
    query: GetUserRelatedBooksDocument,
    ...options,
  });
}
export const GetUserRelatedAuthorsDocument = gql`
  query GetUserRelatedAuthors {
    userRelatedAuthors {
      id
      name
    }
  }
`;

export function useGetUserRelatedAuthorsQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserRelatedAuthorsQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserRelatedAuthorsQuery>({
    query: GetUserRelatedAuthorsDocument,
    ...options,
  });
}
export const GetUserBooksProgressLogsDocument = gql`
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

export function useGetUserBooksProgressLogsQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserBooksProgressLogsQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserBooksProgressLogsQuery>({
    query: GetUserBooksProgressLogsDocument,
    ...options,
  });
}
export const GetBooksForSearchPageDocument = gql`
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

export function useGetBooksForSearchPageQuery(
  options: Omit<
    Urql.UseQueryArgs<GetBooksForSearchPageQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetBooksForSearchPageQuery>({
    query: GetBooksForSearchPageDocument,
    ...options,
  });
}
export const GetBookDetailsFromOpenLibraryDocument = gql`
  query GetBookDetailsFromOpenLibrary($isbn: String!) {
    openLibraryWorkDetails(isbn: $isbn) {
      __typename
      ... on BooksSearchError {
        message
      }
      ... on OpenLibraryWorkDetailsDto {
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

export function useGetBookDetailsFromOpenLibraryQuery(
  options: Omit<
    Urql.UseQueryArgs<GetBookDetailsFromOpenLibraryQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetBookDetailsFromOpenLibraryQuery>({
    query: GetBookDetailsFromOpenLibraryDocument,
    ...options,
  });
}
