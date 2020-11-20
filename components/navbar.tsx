import Link from 'next/link';
import Image from 'next/image';
import buttonStyles from '../styles/button.module.css';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <div id={styles.logo}>
        <div id={styles.fernImg}>
          <Image src='/fern.svg' width={50} height={50} alt='Fern Picture' />
        </div>
        <h2>Fern</h2>
      </div>

      <div id={styles.links}>
        <Link href='/login'>
          <button className={buttonStyles.standard}>Log In</button>
        </Link>
        <Link href='/signup'>
          <button className={buttonStyles.inverted}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
