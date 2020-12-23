import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import buttonStyles from "styles/misc/buttons.module.scss";
import styles from "styles/pages/index.module.scss";
import { WEBSITE_NAME } from "utils/constants/constants";

const Index = () => {
    return (
        <div>
            <Head>
                <title>{WEBSITE_NAME}</title>
            </Head>

            <main>
                <div className={styles.layoutGrid}>
                    <aside className={styles.layoutGrid__sideGradient} />

                    <div className={styles.content}>
                        <div className={styles.content__topBoxes}>
                            <div className={styles.titleCard}>
                                <h1 className={styles.titleCard__title}>
                                    {WEBSITE_NAME}
                                </h1>

                                <h2 className={styles.titleCard__subtitle}>
                                    Experience it. Share it. Repeat.
                                </h2>

                                <div className={styles.titleCard__buttons}>
                                    <Link href="/login">
                                        <a className={buttonStyles.inline}>
                                            Log in
                                        </a>
                                    </Link>

                                    <Link href="/signup">
                                        <a className={buttonStyles.inline}>
                                            Create an Account
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.content__topBoxes}>
                            <div className={styles.content__logo}>
                                <Image
                                    src="/logoblue.svg"
                                    width={375}
                                    height={375}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div
                            className={classNames(
                                styles.content__content,
                                styles.content__description
                            )}
                        >
                            <h1>Share Your Experiences with the World</h1>

                            <p>
                                Kirfley offers a simple way to share your
                                experiences with the world. Share your
                                commentary on any world event without fear of
                                your opinions being discriminated against.
                            </p>

                            <br />

                            <Link href="/learn-more">
                                <a className={buttonStyles.inline}>
                                    Learn More
                                </a>
                            </Link>
                        </div>

                        <div
                            className={classNames(
                                styles.content__content,
                                styles.content__description
                            )}
                        >
                            <h1>All of Your Memories in One Place</h1>

                            <p>Your memories will be in one place.</p>
                        </div>

                        <div
                            className={classNames(
                                styles.content__content,
                                styles.content__description
                            )}
                        >
                            <h1>Share Your Experiences with the World</h1>

                            <p>
                                Kirfley offers a simple way to share your
                                experiences with the world. Share your
                                commentary on any world event without fear of
                                your opinions being discriminated against.
                            </p>
                        </div>

                        <div
                            className={classNames(
                                styles.content__content,
                                styles.content__description
                            )}
                        >
                            <h1>Share Your Experiences with the World</h1>

                            <p>
                                Kirfley offers a simple way to share your
                                experiences with the world. Share your
                                commentary on any world event without fear of
                                your opinions being discriminated against.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
