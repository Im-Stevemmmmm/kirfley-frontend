import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import buttonStyles from "styles/misc/buttons.module.scss";
import styles from "styles/pages/index.module.scss";
import { WEBSITE_NAME } from "utils/constants/constants";

interface CardProps {
    title: string;
    iconPath: string;
    children: React.ReactNode;
}

const Card = ({ title, children, iconPath }: CardProps) => {
    return (
        <div className={styles.card}>
            <Image src={iconPath} width={40} height={40} alt="" />

            <h1 className={styles.card__title}>{title}</h1>

            <p className={styles.card__text}>{children}</p>
        </div>
    );
};

const Index = () => {
    return (
        <div>
            <Head>
                <title>{WEBSITE_NAME}</title>
            </Head>

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
                <h1 className={styles.description__title}>
                    Share Your Experiences with the World
                </h1>

                <p className={styles.description__text}>
                    Kirfley is a social media platform where you can share your
                    experiences with the world. Share your commentary on any
                    world event without fear of your opinions being
                    discriminated against.
                </p>

                <h1 className={styles.description__title}>3 Simple Steps</h1>

                <div id={styles.cardContainer}>
                    <Card title="Experience" iconPath="/globe-line.svg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas alias, possimus ipsum repellendus animi ad
                        inventore quisquam impedit assumenda harum aliquam et
                        temporibus quos reiciendis.
                    </Card>

                    <Card title="Share" iconPath="/share-lines.svg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas alias, possimus ipsum repellendus animi ad
                        inventore quisquam impedit assumenda harum aliquam et
                        temporibus quos reiciendis.
                    </Card>

                    <Card title="Repeat" iconPath="/slow.svg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas alias, possimus ipsum repellendus animi ad
                        inventore quisquam impedit assumenda harum aliquam et
                        temporibus quos reiciendis.
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Index;
