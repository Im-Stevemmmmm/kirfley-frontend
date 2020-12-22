import classNames from "classnames";
import {
    mockTrends,
    TrendingCard,
} from "components/trending-card/trending-card";
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
                <div className={styles.content}>
                    <div className={styles.content__sidebarImage} />

                    <div className={styles.content__banner}>
                        <div className={styles.banner}>
                            <div
                                className={classNames(
                                    styles.banner__child,
                                    styles.banner__child___boxShadow
                                )}
                            >
                                <h1 className={styles.banner__title}>
                                    {websiteName}
                                </h1>

                                <h2
                                    className={classNames(
                                        styles.banner__subtitle
                                    )}
                                >
                                    Experience it. Share it. Repeat.
                                </h2>

                                <div className={styles.banner__buttons}>
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

                            <div
                                className={classNames(
                                    styles.banner__child,
                                    styles.banner__child___last
                                )}
                            >
                                <Image
                                    src="/logoblue.svg"
                                    alt={websiteName}
                                    width={375}
                                    height={375}
                                />
                            </div>
                        </div>

                        <div className={styles.description}>
                            {/* <div className={styles.description__dot}>
                                <Image
                                    src="/graydot.svg"
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                                <Image
                                    src="/graydot.svg"
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                                <Image
                                    src="/graydot.svg"
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                            </div> */}

                            <h1>Share Your Experiences to the World</h1>

                            <p className={styles.description__text}>
                                Kirfley is a social media platform where you can
                                share your experiences or something. By doing
                                this you can become known and popular. This is
                                good because more people can know you.
                                Furthermore, everyone can know you.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
