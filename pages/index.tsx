import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import LoginForm from '../components/login-form';
import styles from '../styles/index.module.css';

const Homepage = () => {
  return (
    <div id={styles.backgroundTexture}>
      <Head>
        <title>Fern</title>
      </Head>

      <div id={styles.banner}>
        <div id={styles.rightColumn}>
          <div id={styles.authCard}>
            <LoginForm />
          </div>
        </div>

        <div id={styles.leftColumnContainer}>
          <div id={styles.leftColumn}>
            <h1 id={styles.title}>
              Fern
              <span>
                <Image
                  src='/fern.svg'
                  width='100%'
                  height='75px'
                  alt='Fern'
                  priority
                />
              </span>
            </h1>

            <h1>The True Social Media Platform</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultricies semper sagittis. Proin vitae est augue. Duis commodo,
              leo sed scelerisque porttitor, erat arcu lobortis velit.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
