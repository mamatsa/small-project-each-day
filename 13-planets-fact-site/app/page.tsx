import PlanetPage from "./[planet]/page";

export default function Home() {
  return <PlanetPage params={{ planet: "mercury" }} />;
}
