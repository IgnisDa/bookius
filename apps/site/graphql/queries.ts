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
