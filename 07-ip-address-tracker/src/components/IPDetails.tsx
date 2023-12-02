import styles from "../styles/IPDetails.module.css";

const IPDetails = ({ ip, city, country, timezone, isp }: IPDetailsProps) => {
  return (
    <div className={styles.infoContainer}>
      <div>
        <p>IP ADDRESS</p>
        <h2>{ip}</h2>
      </div>
      <div className={styles.middleInfo}>
        <div className={styles.splitLine}></div>
        <div>
          <p>LOCATION</p>
          <h2>{`${country}, ${city}`}</h2>
        </div>
      </div>
      <div className={styles.middleInfo}>
        <div className={styles.splitLine}></div>
        <div>
          <p>TIMEZONE</p>
          <h2>{timezone}</h2>
        </div>
      </div>
      <div className={styles.middleInfo}>
        <div className={styles.splitLine}></div>
        <div>
          <p>ISP</p>
          <h2>{isp}</h2>
        </div>
      </div>
    </div>
  );
};

export default IPDetails;
