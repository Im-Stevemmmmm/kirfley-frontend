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
import Signup from '../../pages/signup';
import { GQLMocks } from '../__utils__/apollo';

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

  describe('fields', () => {
    let submitButton: HTMLElement;
    let username: HTMLElement;
    let email: HTMLElement;
    let password: HTMLElement;
    let confirmPassword: HTMLElement;

    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Signup />
        </MockedProvider>
      );

      submitButton = screen.getByText('Sign Up', {
        selector: 'button',
      });

      username = screen.getByLabelText('Username');
      email = screen.getByLabelText('Email');
      password = screen.getByLabelText('Password');
      confirmPassword = screen.getByLabelText('Confirm Password');
    });

    const setValue = (field: HTMLElement, value: string) =>
      fireEvent.change(field, { target: { value } });

    it('constrains the username length between 4 and 26 chars', async () => {
      setValue(username, FieldValues.USERNAME_BAD_SHORT);
      setValue(email, FieldValues.EMAIL_GOOD);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByText(/must be atleast 4 characters long/i)
        ).not.toBeNull();
      });

      setValue(username, FieldValues.USERNAME_BAD_LONG);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByText(/must be less than 26 characters long/i)
        ).not.toBeNull();
      });
    });

    it('constrains the password length between 4 and 26 chars', async () => {
      setValue(username, FieldValues.USERNAME_GOOD);
      setValue(email, FieldValues.EMAIL_GOOD);
      setValue(password, FieldValues.PASSWORD_BAD_SHORT);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByText(/must be atleast 4 characters long/i)
        ).not.toBeNull();
        expect(screen.queryByText(/required/i)).not.toBeNull();
      });

      setValue(password, FieldValues.PASSWORD_BAD_LONG);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.queryByText(/must be less than 26 characters long/i)
        ).not.toBeNull();
        expect(screen.queryByText(/required/i)).not.toBeNull();
      });
    });

    it('checks for a valid email', async () => {
      setValue(username, FieldValues.USERNAME_GOOD);
      setValue(email, FieldValues.EMAIL_BAD);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.queryByText(/invalid email/i)).not.toBeNull();
      });
    });

    it('confirms the password ', async () => {
      setValue(username, FieldValues.USERNAME_GOOD);
      setValue(email, FieldValues.EMAIL_GOOD);
      setValue(password, FieldValues.PASSWORD_GOOD);
      setValue(confirmPassword, '123456');

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.queryByText(/passwords do not match/i)).not.toBeNull();
      });

      setValue(confirmPassword, FieldValues.PASSWORD_GOOD);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.queryByText(/passwords do not match/i)).toBeNull();
      });
    });

    it('signs the user up on and redirects to home on submit', async () => {
      setValue(username, FieldValues.USERNAME_GOOD);
      setValue(email, FieldValues.EMAIL_GOOD);
      setValue(password, FieldValues.PASSWORD_GOOD);
      setValue(confirmPassword, FieldValues.PASSWORD_GOOD);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.queryByText(/\*/)).toBeNull();
      });
    });
  });
});

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

enum FieldValues {
  USERNAME_GOOD = 'steve',
  USERNAME_BAD_SHORT = 'stv',
  USERNAME_BAD_LONG = 'stevestevestevestevestevesteve',
  EMAIL_GOOD = 'example@email.com',
  EMAIL_BAD = 'example@bad',
  PASSWORD_GOOD = '1234',
  PASSWORD_BAD_SHORT = '12',
  PASSWORD_BAD_LONG = '123451234512345123451234512345',
}

enum Fields {
  USERNAME = 'username',
  EMAIL = 'email',
}

const mocks: GQLMocks[] = [
  {
    request: {
      query: REGISTER_USER,
      variables: {
        username: FieldValues.USERNAME_BAD_LONG,
        email: FieldValues.EMAIL_GOOD,
        password: FieldValues.PASSWORD_GOOD,
      },
    },
    result: {
      data: {
        registerUser: {
          user: {
            username: FieldValues.USERNAME_BAD_LONG,
            email: FieldValues.EMAIL_GOOD,
            password: FieldValues.PASSWORD_GOOD,
          },
        },
      },
    },
  },
  {
    request: {
      query: REGISTER_USER,
      variables: {
        username: FieldValues.USERNAME_GOOD,
        email: FieldValues.EMAIL_GOOD,
        password: FieldValues.PASSWORD_BAD_LONG,
      },
    },
    result: {
      data: {
        registerUser: {
          user: {
            username: FieldValues.USERNAME_GOOD,
            email: FieldValues.EMAIL_GOOD,
            password: FieldValues.PASSWORD_BAD_LONG,
          },
        },
      },
    },
  },
  {
    request: {
      query: REGISTER_USER,
      variables: {
        username: FieldValues.USERNAME_GOOD,
        email: FieldValues.EMAIL_GOOD,
        password: FieldValues.PASSWORD_GOOD,
      },
    },
    result: {
      data: {
        registerUser: {
          user: {
            username: FieldValues.USERNAME_GOOD,
            email: FieldValues.EMAIL_GOOD,
            password: FieldValues.PASSWORD_GOOD,
          },
        },
      },
    },
  },
  {
    request: {
      query: REGISTER_USER,
      variables: {
        username: FieldValues.USERNAME_BAD_SHORT,
        email: FieldValues.EMAIL_GOOD,
        password: FieldValues.PASSWORD_GOOD,
      },
    },
    result: {
      data: {
        registerUser: {
          user: {
            username: FieldValues.USERNAME_BAD_SHORT,
            email: FieldValues.EMAIL_GOOD,
            password: FieldValues.PASSWORD_GOOD,
          },
        },
      },
    },
  },
  {
    request: {
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field: Fields.USERNAME,
        value: FieldValues.USERNAME_GOOD,
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
        field: Fields.EMAIL,
        value: FieldValues.EMAIL_GOOD,
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
  {
    request: {
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field: Fields.EMAIL,
        value: FieldValues.EMAIL_BAD,
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
  {
    request: {
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field: Fields.USERNAME,
        value: FieldValues.USERNAME_BAD_SHORT,
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
  {
    request: {
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field: Fields.USERNAME,
        value: FieldValues.USERNAME_BAD_LONG,
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
