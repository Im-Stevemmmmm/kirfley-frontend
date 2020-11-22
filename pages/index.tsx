import Head from 'next/head';
import Image from 'next/image';
import { CSSProperties } from 'react';
import Navbar from '../components/navbar';
import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

const OffsetLogo = ({ mirrored }: { mirrored?: boolean }) => {
  interface StyleProperties {
    classString: string;
    styles: CSSProperties;
  }

  const distance = '-200px';

  const styleMap: StyleProperties[] = [
    {
      classString: `${styles.fernImg}`,
      styles: { left: distance },
    },
    {
      classString: `${styles.fernImg} ${styles.mirrorHorizontal}`,
      styles: { right: distance },
    },
  ];

  const styleProperties = styleMap[mirrored ? 1 : 0];

  return (
    <div className={styleProperties.classString} style={styleProperties.styles}>
      <Image
        src='/fern.svg'
        width={100}
        height={100}
        alt='Fern Picture'
        priority
      />
    </div>
  );
};

const TrendingCard = ({
  trend: heading,
  children,
}: {
  trend: string;
  children: React.ReactNode;
}) => (
  <div className={styles.card}>
    <h1>{'#' + heading}</h1>
    <p>{children}</p>
  </div>
);

const Homepage = () => {
  return (
    <div>
      <Navbar />

      <div id={styles.banner}>
        <Head>
          <title>Fern</title>
        </Head>

        <h1>Fern</h1>

        <div id={styles.horizontalBarContainer}>
          <OffsetLogo mirrored />
          <div id={styles.horizontalBar} />
          <OffsetLogo />
        </div>

        <h2 className={styles.wrappedText}>
          The Unbiased Social Media Platform
        </h2>

        <div id={styles.authButtons} />
      </div>

      <div id={styles.sectionOne}>
        <div id={styles.rightColumn}>
          <div id={styles.authCard}>
            <h1>Log In or Sign Up</h1>
          </div>
        </div>
        <div id={styles.leftColumnContainer}>
          <div id={styles.leftColumn}>
            <h1>The Unbiased Social Media Platform</h1>
            <p>
              Enjoy a free application where you can communicate with others
              without fear of your ideas being censored. Or some other random
              description like this. This is a placeholder!
            </p>
            <button className={buttonStyles.inline}>
              Expirement
              <span>
                {' '}
                <Image
                  src='/arrow.svg'
                  width={10}
                  height={10}
                  alt='Arrow'
                  priority
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
