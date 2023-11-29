import styles from "styles/Statistics.module.css";
import {
  IconBrandRecognition,
  IconDetailedRecords,
  IconFullyCustomizable,
} from "components";

const Statistics = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={styles.statistics}>
        <div className={styles.statistic}>
          <div className={styles.svgWrapper}>
            <IconBrandRecognition />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className={styles.connectingLine}></div>

        <div className={styles.statistic}>
          <div className={styles.svgWrapper}>
            <IconDetailedRecords />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className={styles.connectingLine}></div>

        <div className={styles.statistic}>
          <div className={styles.svgWrapper}>
            <IconFullyCustomizable />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
