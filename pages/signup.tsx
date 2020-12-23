import SignupForm from "components/auth-forms/signup-form/signup-form";
import Head from "next/head";
import styles from "styles/pages/auth-page.module.scss";
import { WEBSITE_NAME } from "utils/constants/constants";

const Signup = () => {
    return (
        <div id={styles.container}>
            <Head>
                <title>Sign up | {WEBSITE_NAME}</title>
            </Head>

            <main id={styles.form}>
                <SignupForm />
            </main>
        </div>
    );
};

export default Signup;
