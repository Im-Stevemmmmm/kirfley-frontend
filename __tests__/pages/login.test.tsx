import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import Login from '../../pages/login';
import { ApolloMock } from '../__utils__/apollo';
import { setValue } from '../__utils__/form';

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
    let submitButton: HTMLElement;
    let email: HTMLElement;
    let password: HTMLElement;

    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Login />
        </MockedProvider>
      );

      submitButton = screen.getByText('Log In', {
        selector: 'button',
      });

      email = screen.getByLabelText('Email');
      password = screen.getByLabelText('Password');
    });

    it('checks for a valid email', async () => {
      setValue(email, FieldValues.EMAIL_BAD);
      setValue(password, FieldValues.PASSWORD_GOOD);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.queryByText(/invalid email/i)).not.toBeNull();
      });
    });

    it('constrains the password length between 4 and 26 chars', async () => {
      setValue(email, FieldValues.EMAIL_BAD);
      setValue(password, FieldValues.PASSWORD_BAD_SHORT);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByText(/must be atleast 4 characters long/i)
        ).not.toBeNull();
      });

      setValue(password, FieldValues.PASSWORD_BAD_LONG);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByText(/must be less than 26 characters long/i)
        ).not.toBeNull();
      });
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
  EMAIL_GOOD = 'example@email.com',
  EMAIL_BAD = 'example@bad',
  PASSWORD_GOOD = '1234',
  PASSWORD_BAD_SHORT = '12',
  PASSWORD_BAD_LONG = '123451234512345123451234512345',
}

const mocks: ApolloMock[] = [
  {
    request: {
      query: AUTHENTICATE_USER,
      variables: {
        email: FieldValues.EMAIL_GOOD,
        password: FieldValues.PASSWORD_GOOD,
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
