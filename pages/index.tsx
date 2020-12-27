import classNames from "classnames";
import { Card } from "components/pages/index/card";
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
                <div className={styles.banner}>
                    <h1 className={styles.banner__title}>Kirfley</h1>

                    <h2 className={styles.banner__subtitle}>
                        Experience it. Share it. Repeat it.
                    </h2>

                    <div className={styles.buttons}>
                        <Link href="/login">
                            <a
                                className={classNames(
                                    buttonStyles.inline,
                                    styles.buttons__button
                                )}
                            >
                                Log in
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

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h1 className={styles.description__title}>
                            Share Your Experiences with the World
                        </h1>

                        <p className={styles.description__text}>
                            Kirfley is a social media platform where you can
                            share your experiences with the world. Share your
                            commentary on any world event without fear of your
                            opinions being discriminated against.
                        </p>
                    </div>

                    <div className={styles.boxImage}>
                        <div className={styles.boxImage__image}>
                            <Image
                                src="/index/phone-taking-image.svg"
                                width={400}
                                height={600}
                                alt=""
                            />
                        </div>

                        <div>
                            <h1 className={styles.boxImage__title}>
                                Capture that Moment
                            </h1>

                            <p className={styles.boxImage__text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Dolores perspiciatis
                                architecto sint esse alias doloribus aspernatur
                                optio voluptate in.
                            </p>
                        </div>
                    </div>

                    <h1 className={styles.description__title}>
                        3 Simple Steps
                    </h1>

                    <div id={styles.cardContainer}>
                        <Card title="Experience" iconPath="/globe-line.svg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas alias, possimus ipsum repellendus animi
                            ad inventore quisquam impedit assumenda harum
                            aliquam et temporibus quos reiciendis.
                        </Card>

                        <Card title="Share" iconPath="/share-lines.svg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas alias, possimus ipsum repellendus animi
                            ad inventore quisquam impedit assumenda harum
                            aliquam et temporibus quos reiciendis.
                        </Card>

                        <Card title="Repeat" iconPath="/slow.svg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas alias, possimus ipsum repellendus animi
                            ad inventore quisquam impedit assumenda harum
                            aliquam et temporibus quos reiciendis.
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
