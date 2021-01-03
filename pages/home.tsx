import { HomeContent } from "components/pages/home/content/content";
import { HomeNavbar } from "components/pages/home/navbar/navbar";
import { HomeSidebar } from "components/pages/home/sidebar/sidebar";
import Head from "next/head";
import styles from "styles/pages/home.module.scss";
import { useSessionAuth } from "utils/hooks/use-session-auth/use-session-auth";

const Home = () => {
    useSessionAuth();

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <main>
                <HomeNavbar />

                <div className={styles.content}>
                    <HomeSidebar />

                    <HomeContent />
                </div>
            </main>
        </div>
    );
};

export default Home;
