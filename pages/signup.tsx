import SignupForm from "components/auth-forms/signup-form/signup-form";
import Head from "next/head";
import styles from "styles/pages/auth-page.module.scss";
import { websiteName } from "utils/constants/constants";

const Signup = () => {
    return (
        <div id={styles.container}>
            <Head>
                <title>Sign up | {websiteName}</title>
            </Head>

            <main id={styles.form}>
                <SignupForm />
            </main>
        </div>
    );
};

export default Signup;
