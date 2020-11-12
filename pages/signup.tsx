import { useFormik } from 'formik';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {},
  });

  return (
    <div id='container'>
      <div id='card'>
        <div id='left-column'>
          <form onSubmit={formik.handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor='lastName'>Password</label>
            <input
              name='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div id='right-column' />
      </div>

      <style jsx>{`
        #container {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100vh;
        }

        #card {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 80%;
          height: 85%;

          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        form {
          display: inline-flex;
          flex-direction: column;
          margin: 0px 200px;
          width: 200px;
        }

        #left-column,
        #right-column {
          float: left;
          width: 50%;
        }

        #right-column {
          background-image: url('/axiom-pattern.png');
          height: 100%;
        }

        .field {
          margin: 20px 0px;
        }

        label,
        input,
        h1,
        p {
          font-family: 'Lato', sans-serif;
        }

        input {
          font-size: 14px;
          border: none;
          border-bottom: 1.5px solid black;
          margin: 10px 0px;
        }

        input:focus {
          outline: none;
        }

        button {
          width: 100px;
          margin: 10px auto;
        }
      `}</style>
    </div>
  );
}
