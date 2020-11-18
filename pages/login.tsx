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

const Login = () => {
  const LoginSchema = object().shape({
    email: string().email('Invalid email').required('Required'),
    password: string()
      .required('Required')
      .min(4, 'Must be atleast 4 characters long')
      .max(26, 'Must be less than 26 characters long'),
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
    validationSchema: LoginSchema,
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
            id='email'
            name='email'
            type='email'
            onChange={handleChange}
            value={values.email}
          />
          <label htmlFor='password'>
            Password
            {errors.password && <span>{formatError(errors.password)}</span>}
          </label>
          <input
            id='password'
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
};

export default Login;
