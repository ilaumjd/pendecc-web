import styles from "./style.module.css";

export default function HomeScreen() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>PENDE.CC</h1>
        <div className={styles.inputContainer}>
          <input
            type="url"
            placeholder="Enter your URL here"
            className={styles.urlInput}
          />
          <button className={styles.submitButton}>Shorten</button>
        </div>
      </main>
    </div>
  );
}
