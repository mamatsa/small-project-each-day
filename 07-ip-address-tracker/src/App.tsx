import { useEffect, useState } from "react";
import axios from "axios";
import { SearchForm, IPDetails, Map } from "./components";
import styles from "./styles/App.module.css";

function App() {
  const [ipDetails, setIpDetails] = useState<IpDetails>({
    ip: "...",
    isp: "...",
    location: {
      country: "...",
      city: "...",
      timezone: "...",
      lat: 0,
      lng: 0,
    },
  });

  // Get user ip address and location on load
  useEffect(() => {
    getLocation("");
  }, []);

  // API call for getting location based on ip address
  const getLocation = async (ipAddress: string) => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IPIFY_IPI_KEY
      }&ipAddress=${ipAddress}`
    );
    setIpDetails(res.data);
  };

  // IP address search handler
  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputIP = event.currentTarget.ipInput.value;
    getLocation(inputIP);
  };

  return (
    <div className={styles.app}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <h1>IP Address Tracker</h1>
        <SearchForm submitHandler={searchHandler} />
        <IPDetails
          ip={ipDetails.ip}
          city={ipDetails.location.city}
          country={ipDetails.location.country}
          timezone={ipDetails.location.timezone}
          isp={ipDetails.isp}
        />
      </div>

      {/* Map Section */}
      <Map
        latitude={ipDetails.location.lat}
        longitude={ipDetails.location.lng}
      />
    </div>
  );
}

export default App;
