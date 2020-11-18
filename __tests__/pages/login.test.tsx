import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { act, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Login from '../../pages/login';
import { GQLMocks } from '../__utils__/apollo';

describe('login form', () => {
  it('renders properly', () => {
    const container = document.createElement('div');

    act(() => {
      ReactDOM.render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Login />
        </MockedProvider>,
        container
      );
    });

    expect(container).toMatchSnapshot();
  });

  describe('fields', () => {
    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Login />
        </MockedProvider>
      );
    });
  });
});

const AUTHENTICATE_USER = gql`
  query AuthenticateUser($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      successful
    }
  }
`;

enum FieldValues {
  EMAIL = 'example@email.com',
  PASSWORD = '1234',
}

const mocks: GQLMocks[] = [
  {
    request: {
      query: AUTHENTICATE_USER,
      variables: {
        email: FieldValues.EMAIL,
        password: FieldValues.PASSWORD,
      },
    },
    result: {
      data: {
        login: {
          successful: true,
        },
      },
    },
  },
];
