import styles from "../styles/home.module.scss";
import useSessionAuth from "../utils/use-session-auth";

export default function Home() {
    useSessionAuth();

    return (
        <div id={styles.container}>
            <h1>Welcome to Fern!</h1>
            <p>Recent posts...</p>
        </div>
    );
}
