import styles from "styles/URLShortener.module.css";
import { useState } from "react";

const URLItems = ({ shortenedURLs }) => {
  const [copiedItem, setCopiedItem] = useState("");
  const copyClickHandler = (event) => {
    navigator.clipboard.writeText(shortenedURLs[event.target.id]);
    setCopiedItem(event.target.id);
  };

  return (
    <div className={styles.urlItems}>
      {Object.entries(shortenedURLs).map((item) => {
        return (
          <div key={item[0]} className={styles.urlItem}>
            <h3>{item[0]}</h3>
            <div className={styles.shortened}>
              <p>{item[1]}</p>
              <button
                onClick={copyClickHandler}
                id={item[0]}
                className={copiedItem === item[0] ? styles.copied : ""}
              >
                {copiedItem === item[0] ? "copied!" : "copy"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default URLItems;
