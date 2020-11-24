import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import IndexNavbar from '../components/index-navbar';
import LoginForm from '../components/login-form';
import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

const Homepage = () => {
  const [loginBoxIsVisible, setLoginBoxVisibility] = useState(false);

  return (
    <div>
      <Head>
        <title>Fern</title>
      </Head>

      <motion.div
        initial='hidden'
        animate={loginBoxIsVisible ? 'hidden' : 'visible'}
        variants={{
          hidden: {
            opacity: 0,
            transitionEnd: {
              display: 'none',
            },
          },
          visible: {
            opacity: 1,
            display: 'block',
          },
        }}
      >
        <IndexNavbar />
      </motion.div>

      <div id={styles.banner}>
        <div id={styles.rightColumn}>
          <VisibilitySensor
            onChange={visible => {
              setLoginBoxVisibility(visible);
            }}
            partialVisibility
          >
            <div id={styles.authCard}>
              <LoginForm />
            </div>
          </VisibilitySensor>
        </div>

        <div id={styles.leftColumnContainer}>
          <div id={styles.leftColumn}>
            <h1 id={styles.title}>
              Fern
              <span>
                <Image src='/fern.svg' width='125px' height='75px' priority />
              </span>
            </h1>

            <h1>The True Social Media Platform</h1>

            <p>
              Enjoy a free application where you can communicate with others
              without fear of your ideas being censored. Or some other random
              description like this. This is a placeholder!
            </p>

            <Link href='/signup'>
              <button className={buttonStyles.inverted}>Sign Up ➤</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
