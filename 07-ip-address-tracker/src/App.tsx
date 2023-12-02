import { IconArrow } from "./components";
import styles from "./styles/App.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <div className={styles.app}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <h1>IP Address Tracker</h1>

        {/* Input field */}
        <form action="" className={styles.mainForm}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button>
            <IconArrow />
          </button>
        </form>

        {/* Result data */}
        <div className={styles.infoContainer}>
          <div>
            <p>IP ADDRESS</p>
            <h2>127.0.0.1</h2>
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.splitLine}></div>
            <div>
              <p>LOCATION</p>
              <h2>Tbilisi, Georgia</h2>
            </div>
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.splitLine}></div>
            <div>
              <p>TIMEZONE</p>
              <h2>UTC-04:00</h2>
            </div>
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.splitLine}></div>
            <div>
              <p>ISP</p>
              <h2>Silknet</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.map}>
        <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
