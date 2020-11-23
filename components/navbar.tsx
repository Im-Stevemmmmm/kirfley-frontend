import Link from 'next/link';
import Image from 'next/image';
import buttonStyles from '../styles/button.module.css';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav id={styles.navbar}>
      <ul id={styles.navbarNav}>
        <li>
          <div id={styles.logo}>
            <Image src='/fern.svg' width={50} height={50} priority />
          </div>
        </li>
        <li>
          <Link href='/login'>
            <button className={buttonStyles.standard}>Log In</button>
          </Link>
        </li>
        <li>
          <Link href='/signup'>
            <button className={buttonStyles.inverted}>Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
