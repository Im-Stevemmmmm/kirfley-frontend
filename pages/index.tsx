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
                <div className={styles.banner}>
                    <div className={styles.banner__child}>
                        <h1 className={styles.banner__title}>{websiteName}</h1>

                        <h2
                            className={classNames(
                                styles.banner__title,
                                styles.banner__title___subtitle
                            )}
                        >
                            Connect. Share. Do it again.
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
                                Create an account
                            </button>
                        </div>
                    </div>

                    <div
                        className={classNames(
                            styles.banner__child,
                            styles.banner__child___form
                        )}
                    >
                        <Image
                            src="/klogo.svg"
                            alt={websiteName}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

                <div className={styles.trendingContainer}>
                    <h1 className={styles.trendingContainer__title}>
                        What the World is Talking About
                    </h1>

                    <div id={styles.trendingCards}>
                        {mockTrends.map(({ title, url }) => (
                            <TrendingCard key={title} title={title} url={url} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
