import { gql } from '@apollo/client';

export const CHECK_FIELD_AVAILABILITY = gql`
  query CheckFieldAvailabilty($field: String!, $value: String!) {
    checkFieldAvailability(field: $field, value: $value) {
      successful
    }
  }
`;
