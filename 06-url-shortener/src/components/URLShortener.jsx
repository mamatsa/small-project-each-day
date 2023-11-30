import styles from "styles/URLShortener.module.css";
import useShortURL from "src/hooks/useShortURL";

const URLShortener = () => {
  const [shortenedURLs, shortenUrl] = useShortURL();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputURL = event.target.url.value;
    shortenUrl(inputURL);
  };
  console.log(shortenedURLs);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input type="text" name="url" placeholder="Shorten a link here..." />
        <button type="submit">Shorten It!</button>
      </form>

      <div>
        {Object.entries(shortenedURLs).map((item) => {
          return (
            <div key={item[0]}>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default URLShortener;
