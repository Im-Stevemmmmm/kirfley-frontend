import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/index.module.css';

const Homepage = () => {
  return (
    <div id={styles.root}>
      <Head>
        <title>Fern</title>
      </Head>

      <h1>Fern</h1>
      <h2 className={styles.wrappedText}>
        A free platform where you can pretty much say anything.
      </h2>
      <div id={styles.authButtons}>
        <Link href='/signup'>
          <button>Sign Up</button>
        </Link>
        <Link href='/login'>
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
