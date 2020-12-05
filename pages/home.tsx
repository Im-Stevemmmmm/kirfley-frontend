import styles from "styles/pages/home.module.scss";
import { websiteName } from "utils/constants/constants";
import { useSessionAuth } from "utils/hooks/use-session-auth/use-session-auth";

const Home = () => {
    useSessionAuth();

    return (
        <div id={styles.container}>
            <h1>Welcome to {websiteName}!</h1>
            <p>Recent posts...</p>
        </div>
    );
};

export default Home;
