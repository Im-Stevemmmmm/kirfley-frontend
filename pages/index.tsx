import Head from "next/head";
import Footer from "../components/footer";
import AuthForm from "../components/forms/auth-form";
import styles from "../styles/index.module.scss";

export default function Homepage() {
    return (
        <div id={styles.container}>
            <Head>
                <title>Fern</title>
            </Head>

            <div id={styles.content}>
                <div id={styles.rightColumn}>
                    <div id={styles.formBackground}>
                        <AuthForm />
                    </div>
                </div>

                <div id={styles.leftColumnContainer}>
                    <div id={styles.leftColumn}>
                        <h1 className={styles.title}>
                            Fern
                            <span className={styles.title_logo}>
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
