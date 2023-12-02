import { IconArrow } from "./components";
import styles from "./styles/App.module.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

type IpDetails = {
  ip: string;
  isp: string;
  location: {
    country: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
};

function App() {
  const [ipDetails, setIpDetails] = useState<IpDetails>({
    ip: "",
    isp: "",
    location: {
      country: "",
      city: "",
      timezone: "",
      lat: 0,
      lng: 0,
    },
  });

  useEffect(() => {
    const getLocation = async (ipAddress: string) => {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_IPIFY_IPI_KEY
        }&ipAddress=${ipAddress}`
      );
      console.log(res.data);
      console.log(typeof res.data.location.lat);
      setIpDetails(res.data);
    };

    const getUserIPAddress = async () => {
      const res = await axios.get("https://api.ipify.org/?format=json");
      console.log(res.data);
      getLocation(res.data.ip);
    };

    getUserIPAddress();
  }, []);

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
            <h2>{ipDetails.ip}</h2>
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.splitLine}></div>
            <div>
              <p>LOCATION</p>
              <h2>{`${ipDetails.location.country}, ${ipDetails.location.city}`}</h2>
            </div>
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.splitLine}></div>
            <div>
              <p>TIMEZONE</p>
              <h2>{ipDetails.location.timezone}</h2>
            </div>
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.splitLine}></div>
            <div>
              <p>ISP</p>
              <h2>{ipDetails.isp}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.map}>
        {ipDetails.ip && (
          <MapContainer
            center={[ipDetails.location.lat, ipDetails.location.lng]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[ipDetails.location.lat, ipDetails.location.lng]}
            />
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default App;
