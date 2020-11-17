import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { act, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Signup from '../../pages/signup';

const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      options: { username: $username, email: $email, password: $password }
    ) {
      user {
        username
        email
        password
      }
    }
  }
`;

const CHECK_FIELD_AVAILABILITY = gql`
  query CheckFieldAvailabilty($field: String!, $value: String!) {
    checkFieldAvailability(field: $field, value: $value) {
      successful
    }
  }
`;

const mocks = [
  {
    request: {
      query: REGISTER_USER,
      variables: {
        username: 'steve',
        email: 'example@email.com',
        password: '1234',
      },
    },
    result: {
      data: {
        registerUser: {
          user: {
            username: 'steve',
            email: 'example@email.com',
            password: '1234',
          },
        },
      },
    },
  },
  {
    request: {
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field: 'username',
        value: 'steve',
      },
    },
    result: {
      data: {
        checkFieldAvailability: {
          successful: false,
        },
      },
    },
  },
  {
    request: {
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field: 'email',
        value: 'example@email.com',
      },
    },
    result: {
      data: {
        checkFieldAvailability: {
          successful: true,
        },
      },
    },
  },
];

describe('sign up form', () => {
  it('renders properly', () => {
    const container = document.createElement('div');

    act(() => {
      ReactDOM.render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Signup />
        </MockedProvider>,
        container
      );
    });

    expect(container).toMatchSnapshot();
  });

  describe('queries', () => {
    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Signup />
        </MockedProvider>
      );
    });

    it('does not submit if the email or username is already registered', () => {});

    // it('signs a user up on submit', async () => {
    //   const submitButton = screen.getByText('Sign Up', {
    //     selector: 'button',
    //   });

    //   const username = screen.getByText('Username');
    //   username.textContent = 'steve';

    //   const email = screen.getByText('Email');
    //   email.textContent = 'example@email.com';

    //   const password = screen.getByText('Password');
    //   password.textContent = '1234';

    //   fireEvent.click(submitButton);
    // });
  });
});
