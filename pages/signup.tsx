import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';
import { User } from '../components/entities';

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
    <div id='container'>
      <div id='left-column'>
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
        <div id='background' />
      </div>
      <div id='right-column' />

      <style jsx>{`
        #container {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100vh;
          background-image: linear-gradient(35deg);
        }

        #card,
        #left-column,
        #right-column {
          background-color: white;
        }

        #left-column,
        #right-column {
          float: left;
          width: 50%;
          height: 100%;
        }

        #password-card {
          position: absolute;
        }

        #left-column {
          display: flex;
          align-items: center;
          background-color: #9ad3bc;
        }

        #right-column {
          // background-image: url('/cards.svg');
          background-color: #f3eac2;
        }

        form {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          margin: 0px 25%;

          width: 200px;
        }

        label,
        input,
        h1,
        p,
        span {
          font-family: 'Roboto Slab', serif;
          color: black;
        }

        span {
          color: red;
        }

        input {
          background-color: transparent;
          font-size: 14px;
          border: none;
          border-bottom: 1.5px solid black;
          margin: 10px 0px;
        }

        input:focus {
          outline: none;
        }

        button {
          margin: 10px auto;
        }

        @media screen and (max-width: 850px) {
          #left-column {
            display: flex;
            justify-content: center;
            width: 100%;
            z-index: 0;
          }

          #right-column {
            display: none;
          }

          #background {
            position: absolute;
            // background-image: url('/cards.svg');
            // filter: blur(8px);
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          input {
            border: 1.5px solid transparent;
            border-bottom: 1.5px solid black;
          }
        }
      `}</style>
    </div>
  );
}
