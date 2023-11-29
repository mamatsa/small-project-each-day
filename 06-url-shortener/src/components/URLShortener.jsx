import styles from "styles/URLShortener.module.css";

const URLShortener = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
      </form>
    </div>
  );
};

export default URLShortener;
