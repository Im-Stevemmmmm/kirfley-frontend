import Head from 'next/head';
import Image from 'next/image';
import { CSSProperties } from 'react';
import Navbar from '../components/navbar';
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
      <Image src='/fern.svg' width={100} height={100} alt='Fern Picture' />
    </div>
  );
};

const Homepage = () => {
  return (
    <div id={styles.root}>
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
          A free platform where you can pretty much say anything.
        </h2>

        <div id={styles.authButtons}></div>
      </div>

      <div id={styles.sectionOne}>{/* <h1>Connecting the World</h1> */}</div>
    </div>
  );
};

export default Homepage;
