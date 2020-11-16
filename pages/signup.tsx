import { gql, useApolloClient, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useRouter } from 'next/router';
import styles from '../styles/authentication.module.css';
import formatError from '../utils/auth-format-error';
import { User, UserResponse } from '../utils/gqlentities';

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

interface CheckFieldAvailabiltyData {
  checkFieldAvailability: UserResponse;
}

interface CheckFieldAvailabiltyVars {
  field: string;
  value: string;
}

export default function Signup() {
  const client = useApolloClient();
  const router = useRouter();

  const checkFieldAvailability = async (
    field: string,
    value: string
  ): Promise<boolean> => {
    const { data } = await client.query<
      CheckFieldAvailabiltyData,
      CheckFieldAvailabiltyVars
    >({
      query: CHECK_FIELD_AVAILABILITY,
      variables: {
        field,
        value,
      },
    });

    return data.checkFieldAvailability.successful;
  };

  const SignupSchema = object().shape({
    username: string()
      .required('Required')
      .min(4, 'Must be atleast 4 characters long')
      .max(26, 'Must be less than 26 characters long')
      .test(
        'username-available',
        'Username is already taken',
        async username => {
          return await checkFieldAvailability('username', username);
        }
      ),
    email: string()
      .email('Invalid email')
      .required('Required')
      .test('email-available', 'Email is already registered', async email => {
        return await checkFieldAvailability('email', email);
      }),
    password: string()
      .required('Required')
      .min(4, 'Must be atleast 4 characters long')
      .max(26, 'Must be less than 26 characters long'),
    confirmPassword: string()
      .required('Required')
      .test('password-match', 'Passwords do not match', function (value) {
        const { password } = this.parent;
        return password === value;
      }),
  });

  const [registerUser] = useMutation<User, User>(REGISTER_USER);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async values => {
      await registerUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      });

      router.push('/home');
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div id={styles.root}>
      <div id={styles.leftColumn}>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor='username'>
            Username
            {errors.username && <span>{formatError(errors.username)}</span>}
          </label>
          <input
            name='username'
            type='text'
            placeholder='atleast 4 characters long'
            onChange={handleChange}
            value={values.username}
            autoFocus
          />
          <label htmlFor='email'>
            Email
            {errors.email && <span>{formatError(errors.email)}</span>}
          </label>
          <input
            name='email'
            type='email'
            placeholder='example@domain.com'
            onChange={handleChange}
            value={values.email}
            autoFocus
          />
          <label htmlFor='password'>
            Password
            {errors.password && <span>{formatError(errors.password)}</span>}
          </label>
          <input
            name='password'
            type='password'
            placeholder='atleast 4 characters long'
            onChange={handleChange}
            value={values.password}
            autoFocus
          />
          <label htmlFor='confirmPassword'>
            Confirm Password
            {errors.confirmPassword && (
              <span>{formatError(errors.confirmPassword)}</span>
            )}
          </label>
          <input
            name='confirmPassword'
            type='password'
            onChange={handleChange}
            value={values.confirmPassword}
            autoFocus
          />
          <button type='submit'>Sign Up</button>
        </form>
        <div id={styles.background} />
      </div>
      <div id={styles.rightColumn} />
    </div>
  );
}
