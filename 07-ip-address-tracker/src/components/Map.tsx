import { MapContainer, TileLayer, Marker } from "react-leaflet";
import styles from "../styles/Map.module.css";

const Map = ({ latitude, longitude }: MapProps) => {
  return (
    <div className={styles.map}>
      {latitude && (
        <MapContainer
          key={latitude + "" + longitude}
          center={[latitude, longitude]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]} />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
