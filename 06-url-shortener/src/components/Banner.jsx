import { IlustrationWorking } from "components/svg";
import styles from "styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerInfo}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brands recognition and get detiled insghts on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <IlustrationWorking />
    </div>
  );
};

export default Banner;
