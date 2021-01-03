import classNames from "classnames";
import { Navbar } from "components/pages/index/navbar/navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import buttonStyles from "styles/misc/buttons.module.scss";
import styles from "styles/pages/index.module.scss";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Kirfley</title>
            </Head>

            <main>
                <Navbar />

                <div className={styles.banner}>
                    <div className={styles.banner__child}>
                        <h1 className={styles.banner__title}>Kirfley</h1>

                        <h2>Share Your Opinions With the World</h2>

                        <div className={styles.banner__buttons}>
                            <Link href="/login">
                                <a
                                    className={classNames(
                                        buttonStyles.inline,
                                        styles.buttons__button
                                    )}
                                >
                                    Log In
                                </a>
                            </Link>

                            <Link href="/signup">
                                <a
                                    className={classNames(
                                        buttonStyles.inline,
                                        styles.buttons__button
                                    )}
                                >
                                    Create an Account
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.banner__child}>
                        <Image
                            src="/index/phone-taking-image.svg"
                            width={400}
                            height={600}
                            alt=""
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
