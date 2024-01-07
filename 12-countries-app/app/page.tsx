import { promises as fs } from "fs";
import CountryCard from "./components/CountryCard";

export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
}

const Home = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const countries: Country[] = JSON.parse(file);

  return (
    <main className="mt-6">
      <ul className="flex flex-col items-center gap-10">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
