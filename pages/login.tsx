import { gql, useApolloClient } from '@apollo/client';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import formatError from '../utils/auth-format-error';
import { User, UserResponse } from '../utils/gqlentities';
import styles from '../styles/authentication.module.css';

const AUTHENTICATE_USER = gql`
  query AuthenticateUser($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      successful
    }
  }
`;

interface AuthenticateUserData {
  login: UserResponse;
}

export default function Login() {
  const SignupSchema = object().shape({
    email: string().email('Invalid email').required('Required'),
    password: string().required('Required').min(4).max(26),
  });

  const client = useApolloClient();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      const { data } = await client.query<AuthenticateUserData, User>({
        query: AUTHENTICATE_USER,
        variables: {
          email: values.email,
          password: values.password,
        },
      });

      console.log(data.login.successful);
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div id={styles.root}>
      <div id={styles.leftColumn}>
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <label htmlFor='email'>
            Email
            {errors.email && <span>{formatError(errors.email)}</span>}
          </label>
          <input
            name='email'
            type='text'
            onChange={handleChange}
            value={values.email}
          />
          <label htmlFor='password'>
            Password
            {errors.password && <span>{formatError(errors.password)}</span>}
          </label>
          <input
            name='password'
            type='password'
            onChange={handleChange}
            value={values.password}
          />
          <button type='submit'>Log In</button>
        </form>
        <div id={styles.background} />
      </div>
      <div id={styles.rightColumn} />
    </div>
  );
}
