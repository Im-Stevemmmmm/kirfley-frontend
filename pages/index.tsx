import classNames from "classnames";
import LoginForm from "components/auth-forms/login-form/login-form";
import Footer from "components/footer/footer";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/index.module.scss";
import { websiteName } from "utils/constants/constants";

const Index = () => {
    return (
        <div>
            <Head>
                <title>{websiteName}</title>
            </Head>

            <main>
                <div className={styles.banner}>
                    <div className={styles.banner__column}>
                        <h1 className={styles.title}>
                            {websiteName}

                            <span className={styles.title__logo}>
                                <Image
                                    src="/fern.svg"
                                    width="100%"
                                    height="75px"
                                    alt="Fern picture"
                                    priority
                                />
                            </span>
                        </h1>

                        <h2>The #1 Video Sharing Platform</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus ultricies semper sagittis. Proin vitae
                            est augue. Duis commodo, leo sed scelerisque
                            porttitor, erat arcu lobortis velit.
                        </p>
                    </div>

                    <div
                        className={classNames(
                            styles.banner__column,
                            styles.banner__column___form
                        )}
                    >
                        <LoginForm />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Index;
