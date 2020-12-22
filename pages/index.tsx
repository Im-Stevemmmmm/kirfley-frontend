import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import buttonStyles from "styles/misc/buttons.module.scss";
import styles from "styles/pages/index.module.scss";
import { websiteName } from "utils/constants/constants";

const Index = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{websiteName}</title>
            </Head>

            <main>
                <div className={styles.grid}>
                    <div className={styles.grid__sidebar} />

                    <div className={styles.grid__child}>
                        <div className={styles.grid__titleCardContainer}>
                            <h1 className={styles.titleCard__title}>
                                {websiteName}
                            </h1>

                            <h2 className={styles.titleCard__subtitle}>
                                Experience it. Share it. Repeat.
                            </h2>

                            <div className={styles.titleCard__buttons}>
                                <button
                                    className={buttonStyles.inline}
                                    onClick={() => router.push("/login")}
                                >
                                    Log in
                                </button>

                                <p>or</p>

                                <button
                                    className={buttonStyles.inline}
                                    onClick={() => router.push("/signup")}
                                >
                                    Create an Account
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={classNames(
                            styles.grid__child,
                            styles.grid__child___noMargin
                        )}
                    >
                        <div className={styles.grid__logo}>
                            <Image
                                src="/logoblue.svg"
                                alt={websiteName}
                                width={375}
                                height={375}
                            />
                        </div>
                    </div>

                    <div
                        className={classNames(
                            styles.grid__child,
                            styles.grid__description
                        )}
                    >
                        <h1>Share Your Experiences to the World</h1>

                        <p>
                            Kirfley is a social media platform where you can
                            share your experiences or something. By doing this
                            you can become known and popular. This is good
                            because more people can know you. Furthermore,
                            everyone can know you.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
