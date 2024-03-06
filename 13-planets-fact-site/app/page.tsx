import PlanetPage from "./[planet]/page";

export default async function Home() {
  return <PlanetPage params={{ planet: "mercury" }} />;
}
