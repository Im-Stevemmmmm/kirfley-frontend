import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div id={styles.root}>
      <h1>Welcome to Fern!</h1>
      <p>Recent posts...</p>
    </div>
  );
}
