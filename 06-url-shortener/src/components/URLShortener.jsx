import styles from "styles/URLShortener.module.css";
import useShortURL from "src/hooks/useShortURL";
import URLItems from "./URLItems";
import { useState } from "react";

const URLShortener = () => {
  const [shortenedURLs, shortenUrl] = useShortURL();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const inputURL = event.target.url.value;

    if (!inputURL) {
      setError("Please add a link");
    } else {
      setError("");
      setLoading(true);
      shortenUrl(inputURL).then(() => {
        setLoading(false);
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="url"
            className={error ? styles.error : ""}
            placeholder="Shorten a link here..."
          />
          {error && <p className={styles.errorText}>{error}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Wait..." : "Shorten It!"}
        </button>
      </form>

      <URLItems shortenedURLs={shortenedURLs} />
    </div>
  );
};

export default URLShortener;
