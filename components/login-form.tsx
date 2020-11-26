import { useApolloClient } from '@apollo/client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { object, string } from 'yup';
import {
  AuthenticateUserDocument,
  AuthenticateUserQuery,
  AuthenticateUserQueryVariables,
} from '../generated/graphql-types';
import styles from '../styles/auth-forms.module.css';
import buttonStyles from '../styles/button.module.css';
import formatError from '../utils/auth-format-error';

const LoginForm = () => {
  const client = useApolloClient();
  const router = useRouter();

  const LoginSchema = object().shape({
    email: string().email('Invalid email').required('Required'),
    password: string()
      .required('Required')
      .test('password-is-correct', 'Incorrect password', async _ => {
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

        return data.login.successful;
      }),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async _ => {
      router.push('/home');
    },
    validationSchema: LoginSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div id={styles.root}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Username or Email
          {errors.email && (
            <span className={styles.error}>{formatError(errors.email)}</span>
          )}
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
          {errors.password && (
            <span className={styles.error}>{formatError(errors.password)}</span>
          )}
        </label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
        />
        <button
          type='submit'
          id={styles.loginButton}
          className={buttonStyles.inverted}
        >
          Log In
        </button>
        <p>or</p>
        <Link href='/signup'>
          <button className={buttonStyles.inverted}>Create an Account</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
