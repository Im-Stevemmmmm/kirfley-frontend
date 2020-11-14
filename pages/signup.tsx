import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { User } from '../components/gqlentities';
import styles from '../styles/authentication.module.css';

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    registerUser(options: { email: $email, password: $password }) {
      user {
        email
        password
      }
    }
  }
`;

export default function SignUp() {
  const SignupSchema = object().shape({
    email: string().email('Invalid email').required('Required'),
    password: string().required('Required').min(4).max(26),
    confirmPassword: string()
      .required('Required')
      .test('password-match', 'Passwords do not match', function (value) {
        const { password } = this.parent;
        return password === value;
      }),
  });

  const [registerUser] = useMutation<User, User>(REGISTER_USER);

  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      registerUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <div id={styles.root}>
      <div id={styles.leftColumn}>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor='email'>
            Email
            {errors.email && <span>{' *' + errors.email}</span>}
          </label>
          <input
            name='email'
            type='text'
            placeholder='example@domain.com'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            autoFocus
          />
          <label htmlFor='password'>
            Password
            {errors.password && <span>{' *' + errors.password}</span>}
          </label>
          <input
            name='password'
            type='password'
            placeholder='atleast 4 characters long'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            autoFocus
          />
          <label htmlFor='confirmPassword'>
            Confirm Password
            {errors.confirmPassword && (
              <span>{' *' + errors.confirmPassword}</span>
            )}
          </label>
          <input
            name='confirmPassword'
            type='password'
            onChange={handleChange}
            onBlur={handleBlur}
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
