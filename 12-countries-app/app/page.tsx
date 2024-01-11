import { promises as fs } from "fs";
import Link from "next/link";
import { Search, CountryCard, Filter } from "@/app/components";

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

interface HomeProps {
  searchParams?: {
    search?: string;
    region?: string;
  };
}

const Home = async ({ searchParams }: HomeProps) => {
  // Fetch countries
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: Country[] = JSON.parse(file);
  let countries = data;

  // Get search params
  const searchWord = searchParams?.search || "";
  const region = searchParams?.region || "";

  // Helper function to check if a country matches the filters
  const matchesFilters = (
    country: Country,
    searchWord: string,
    region: string,
  ) => {
    const nameMatches =
      !searchWord ||
      country.name.toLowerCase().includes(searchWord.toLowerCase().trim());
    const regionMatches = !region || country.region === region;
    return nameMatches && regionMatches;
  };

  // Filter countries if search word or region filter is provided
  if (searchWord || region) {
    countries = countries.filter((country) =>
      matchesFilters(country, searchWord, region),
    );
  }

  return (
    <main className="px-4 py-6 sm:px-12 2xl:px-20 2xl:py-10">
      <Search />
      <Filter />
      <ul className="grid grid-flow-row grid-cols-1 justify-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <Link
            href={{
              pathname: `/${country.alpha2Code}`,
              query: searchWord && { search: searchWord },
            }}
            key={country.alpha2Code}
          >
            <CountryCard country={country} />
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Home;
