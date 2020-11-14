import { gql, useApolloClient } from '@apollo/client';
import { useFormik } from 'formik';
import { User } from '../components/entities';
import styles from '../styles/authentication.module.css';

const AUTHENTICATE_USER = gql`
  query AuthenticateUser($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      successful
    }
  }
`;

interface UserData {
  login: { authenticated: boolean };
}

export default function SignIn() {
  const client = useApolloClient();

  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      const { data } = await client.query<UserData, User>({
        query: AUTHENTICATE_USER,
        variables: {
          email: values.email,
          password: values.password,
        },
      });

      console.log(data.login.authenticated);
    },
  });

  return (
    <div id={styles.root}>
      <div id={styles.leftColumn}>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            onChange={handleChange}
            value={values.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            onChange={handleChange}
            value={values.password}
          />
          <button type='submit'>Sign In</button>
        </form>
        <div id={styles.background} />
      </div>
      <div id={styles.rightColumn} />
    </div>
  );
}
