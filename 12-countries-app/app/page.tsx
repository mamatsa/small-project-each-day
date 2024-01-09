import { promises as fs } from "fs";
import CountryCard from "./components/CountryCard";
import Search from "./components/Search";
import Link from "next/link";

export interface Country {
  alpha2Code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  borders: string[];
  topLevelDomain: string[];
  currencies: { code: string; name: string }[];
  languages: {
    name: string;
  }[];
  flags: {
    svg: string;
  };
}

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) => {
  const searchWord = searchParams?.search || "";

  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: Country[] = JSON.parse(file);
  let countries = data;

  if (searchWord) {
    countries = countries.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(searchWord.toLowerCase().trim());
    });
  }

  return (
    <main className="mt-6 px-4">
      <Search />
      <ul className="flex flex-col items-center gap-10">
        {countries.map((country) => (
          <Link href={`/${country.alpha2Code}`} key={country.alpha2Code}>
            <CountryCard country={country} />
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Home;
