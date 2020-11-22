import { useApolloClient } from '@apollo/client';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { object, string } from 'yup';
import {
  CheckFieldAvailabiltyDocument,
  CheckFieldAvailabiltyQuery,
  CheckFieldAvailabiltyQueryVariables,
  useRegisterUserMutation,
} from '../generated/graphql-types';
import styles from '../styles/authentication.module.css';
import formatError from '../utils/auth-format-error';

const Signup = () => {
  const client = useApolloClient();
  const router = useRouter();

  const checkFieldAvailability = async (
    field: string,
    value: string
  ): Promise<boolean> => {
    const { data } = await client.query<
      CheckFieldAvailabiltyQuery,
      CheckFieldAvailabiltyQueryVariables
    >({
      query: CheckFieldAvailabiltyDocument,
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
      .test(
        'password-match',
        'Passwords do not match',
        function (confirmPassword) {
          const { password } = this.parent;
          return password === confirmPassword;
        }
      ),
  });

  const [registerUser] = useRegisterUserMutation();

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
            id='username'
            name='username'
            type='text'
            placeholder='atleast 4 characters long'
            onChange={handleChange}
            value={values.username}
          />
          <label htmlFor='email'>
            Email
            {errors.email && <span>{formatError(errors.email)}</span>}
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='example@domain.com'
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
            placeholder='atleast 4 characters long'
            onChange={handleChange}
            value={values.password}
          />
          <label htmlFor='confirmPassword'>
            Confirm Password
            {errors.confirmPassword && (
              <span>{formatError(errors.confirmPassword)}</span>
            )}
          </label>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            onChange={handleChange}
            value={values.confirmPassword}
          />
          <button type='submit'>Sign Up</button>
        </form>
        <div id={styles.background} />
      </div>
      <div id={styles.rightColumn} />
    </div>
  );
};

export default Signup;
