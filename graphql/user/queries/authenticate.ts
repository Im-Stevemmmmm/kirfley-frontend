import { gql } from '@apollo/client';

export const AUTHENTICATE_USER = gql`
  query AuthenticateUser($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      successful
    }
  }
`;
