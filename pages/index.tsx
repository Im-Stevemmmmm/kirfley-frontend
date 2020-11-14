import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Homepage() {
  return (
    <div id={styles.root}>
      <h1>Fern</h1>
      <h2 className={styles.wrapped}>
        A free platform where you can pretty much say anything.
      </h2>
      <Link href='/signup'>
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
