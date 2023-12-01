import IlustrationWorking from "src/assets/images/IllustrationWorking.svg";
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
      <img src={IlustrationWorking} alt="Ilustration Working" />
    </div>
  );
};

export default Banner;
