import { useApolloClient } from '@apollo/client';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import {
  AuthenticateUserDocument,
  AuthenticateUserQuery,
  AuthenticateUserQueryVariables,
} from '../generated/graphql-types';
import styles from '../styles/authentication.module.css';
import formatError from '../utils/auth-format-error';
import { UserResponse } from '../utils/gqlentities';

const Login = () => {
  const client = useApolloClient();

  const LoginSchema = object().shape({
    email: string().email('Invalid email').required('Required'),
    password: string()
      .required('Required')
      .min(4, 'Must be atleast 4 characters long')
      .max(26, 'Must be less than 26 characters long'),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      const { data } = await client.query<
        AuthenticateUserQuery,
        AuthenticateUserQueryVariables
      >({
        query: AuthenticateUserDocument,
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
