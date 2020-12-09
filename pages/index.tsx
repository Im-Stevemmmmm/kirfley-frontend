import classNames from "classnames";
import LoginForm from "components/auth-forms/login-form/login-form";
import Head from "next/head";
import styles from "styles/pages/index.module.scss";
import { websiteName } from "utils/constants/constants";

const Index = () => {
    return (
        <div>
            <Head>
                <title>{websiteName}</title>
            </Head>

            <main id={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.banner__child}>
                        <h1 className={styles.banner__title}>Yttrium</h1>

                        <h2
                            className={classNames(
                                styles.banner__title,
                                styles.banner__title___subtitle
                            )}
                        >
                            Connect. Speak. Something.
                        </h2>
                    </div>

                    <div
                        className={classNames(
                            styles.banner__child,
                            styles.banner__child___form
                        )}
                    >
                        <LoginForm />
                    </div>
                </div>

                <div className={styles.trendingContainer}>
                    <h1 className={styles.trendingContainer__title}>
                        The Latest Trends
                    </h1>

                    <h2>See What the World is Talking About</h2>

                    <div id={styles.trendingCards}></div>
                </div>
            </main>
        </div>
    );
};

export default Index;
