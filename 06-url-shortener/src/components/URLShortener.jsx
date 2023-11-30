import styles from "styles/URLShortener.module.css";
import useShortURL from "src/hooks/useShortURL";
import URLItems from "./URLItems";
import { useState } from "react";

const URLShortener = () => {
  const [shortenedURLs, shortenUrl] = useShortURL();
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const inputURL = event.target.url.value;
    setLoading(true);
    shortenUrl(inputURL).then(() => {
      setLoading(false);
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input type="text" name="url" placeholder="Shorten a link here..." />
        <button type="submit" disabled={loading}>
          {loading ? "Wait..." : "Shorten It!"}
        </button>
      </form>

      <URLItems shortenedURLs={shortenedURLs} />
    </div>
  );
};

export default URLShortener;
