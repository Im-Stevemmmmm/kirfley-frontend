import LoginForm from "components/auth-forms/login-form/login-form";
import Footer from "components/footer/footer";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/index.module.scss";
import { websiteName } from "utils/constants/constants";

const Index = () => {
    return (
        <div id={styles.backgroundImage}>
            <Head>
                <title>{websiteName}</title>
            </Head>

            <main>
                <div id={styles.banner}>
                    <div className={styles.rightColumn}>
                        <div className={styles.rightColumn__form}>
                            <LoginForm />
                        </div>
                    </div>

                    <div className={styles.leftColumn}>
                        <div className={styles.leftColumn__container}>
                            <h1 className={styles.leftColumn__title}>
                                {websiteName}

                                <span className={styles.leftColumn__logo}>
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus ultricies semper
                                sagittis. Proin vitae est augue. Duis commodo,
                                leo sed scelerisque porttitor, erat arcu
                                lobortis velit.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Index;
