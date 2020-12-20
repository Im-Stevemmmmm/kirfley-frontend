import LoginForm from "components/auth-forms/login-form/login-form";
import Head from "next/head";
import styles from "styles/pages/auth-page.module.scss";
import { websiteName } from "utils/constants/constants";

const Login = () => {
    return (
        <div>
            <Head>
                <title>Log in | {websiteName}</title>
            </Head>

            <div id={styles.container}>
                <div id={styles.form}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
