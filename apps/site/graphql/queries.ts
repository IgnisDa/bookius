import { gql } from 'urql';

export const GET_STATUS = gql`
  query GetStatus {
    getStatus
  }
`;
