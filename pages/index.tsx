import Head from "next/head";
import Footer from "../components/footer";
import AuthForm from "../components/forms/auth-form";
import styles from "../styles/index.module.scss";

export default function Homepage() {
    return (
        <div id={styles.backgroundImage}>
            <Head>
                <title>Fern</title>
            </Head>

            <div id={styles.mainContent}>
                <div className={styles.rightColumn}>
                    <div className={styles.rightColumn_form}>
                        <AuthForm />
                    </div>
                </div>

                <div className={styles.leftColumn}>
                    <div className={styles.leftColumn_container}>
                        <h1 className={styles.leftColumn_title}>
                            Fern
                            <span className={styles.leftColumn_title_logo}>
                                <img
                                    src="/fern.svg"
                                    width="27.5%"
                                    height="75px"
                                    alt="Fern picture"
                                />
                            </span>
                        </h1>

                        <h1>The True Social Media Platform</h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus ultricies semper sagittis. Proin vitae
                            est augue. Duis commodo, leo sed scelerisque
                            porttitor, erat arcu lobortis velit.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
