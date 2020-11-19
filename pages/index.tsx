import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/index.module.css';

const Homepage = () => {
  return (
    <div id={styles.head}>
      <Head>
        <title>Fern</title>
      </Head>

      <h1>Fern</h1>

      <div id={styles.text}>
        <div
          className={`${styles.fernImg} ${styles.mirrorHorizontal}`}
          style={{ left: '-200px' }}
        >
          <Image src='/fern.svg' width={100} height={100} alt='Fern Picture' />
        </div>

        <div id={styles.horizontalBar} />

        <div className={styles.fernImg} style={{ right: '-200px' }}>
          <Image src='/fern.svg' width={100} height={100} alt='Fern Picture' />
        </div>
      </div>

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
