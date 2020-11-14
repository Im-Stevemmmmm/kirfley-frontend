import Link from 'next/link';

export default function Homepage() {
  return (
    <div id='container'>
      <h1>Something Lol</h1>
      <h2>A platform.</h2>
      <Link href='/signup'>
        <button>Sign Up</button>
      </Link>

      <style jsx>{`
        #container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          height: 100vh;
        }

        h1,
        h2,
        p {
          text-align: center;
          color: rgb(0, 0, 0);
          margin: 5px 40px;
        }

        h2,
        p {
          font-family: 'Lato', sans-serif;
        }

        h1 {
          font-size: 3em;
        }

        h2 {
          font-size: 1.5em;
          max-width: 40ch;
          word-wrap: break-word;
        }

        p {
          text-align: center;
          font-size: 1.2em;
          max-width: 80ch;
        }
      `}</style>
    </div>
  );
}
