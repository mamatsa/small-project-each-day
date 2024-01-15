import Image from "next/image";
import { CountryDetail, GoBackButton, BorderCountries } from "./components";

export interface Country {
  cca3: string;
  name: {
    common: string;
    nativeName: {
      [key: string]: { common: string };
    };
  };
  population: number;
  region: string;
  capital: string[];
  subregion: string;
  borders: string[];
  timezones: string[];
  tld: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: {
    [key: string]: string;
  };
  flags: {
    svg: string;
  };
  area: number;
}

interface CountryProps {
  params: { country: string };
}

const CountryPage = async ({ params }: CountryProps) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.country}`,
  );
  const data: Country[] = await res.json();
  const selectedCountry = data[0];

  return (
    <div className="px-7 py-6 sm:px-12 2xl:px-20 2xl:py-10">
      <GoBackButton />
      <div className="md:flex md:items-start md:gap-12 lg:items-center lg:gap-16 xl:gap-28 2xl:gap-40">
        <Image
          src={selectedCountry.flags.svg}
          alt="flag"
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full rounded md:w-2/5 lg:rounded-md"
          priority={true}
        />

        <div>
          <h1 className="mb-4 mt-10 text-2xl font-extrabold md:mb-6 md:mt-0 lg:mb-6 lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {selectedCountry.name.common}
          </h1>

          {/* Country details */}
          <div className="md:flex md:gap-8 lg:gap-12 xl:gap-20 2xl:gap-32">
            <div>
              <CountryDetail label={"Native Name: "}>
                {selectedCountry.name.nativeName &&
                  Object.values(selectedCountry.name.nativeName)[0].common}
              </CountryDetail>

              <CountryDetail label={"Population: "}>
                {selectedCountry.population.toLocaleString("en-US")}
              </CountryDetail>

              <CountryDetail label={"Region: "}>
                {selectedCountry.region}
              </CountryDetail>

              <CountryDetail label={"Sub Region: "}>
                {selectedCountry.subregion}
              </CountryDetail>

              <CountryDetail label={"Capital: "}>
                {selectedCountry.capital && selectedCountry.capital[0]}
              </CountryDetail>
            </div>

            <div className="my-8 md:my-0">
              <CountryDetail label="Timezone: ">
                {selectedCountry.timezones.length > 1
                  ? selectedCountry.timezones[0] +
                    " - " +
                    selectedCountry.timezones[
                      selectedCountry.timezones.length - 1
                    ]
                  : selectedCountry.timezones[0]}
              </CountryDetail>

              <CountryDetail label="Area: ">
                {selectedCountry.area.toLocaleString("en-US")} km<sup>2</sup>
              </CountryDetail>

              <CountryDetail label={"Currencies: "}>
                {selectedCountry.currencies &&
                  Object.values(selectedCountry.currencies).map(
                    (curr, index) => (
                      <span key={curr.name}>
                        {`${index ? ", " : ""}${curr.name}(${curr.symbol})`}
                      </span>
                    ),
                  )}
              </CountryDetail>

              <CountryDetail label={"Languages: "}>
                {selectedCountry.languages &&
                  Object.values(selectedCountry.languages)?.map(
                    (lang, index) => (
                      <span key={index}>{(index ? ", " : "") + lang}</span>
                    ),
                  )}
              </CountryDetail>

              <CountryDetail label={"Top Level Domain: "}>
                {selectedCountry.tld?.map((domain, index) => (
                  <span key={domain}>{(index ? ", " : "") + domain}</span>
                ))}
              </CountryDetail>
            </div>
          </div>

          {/* Bordering country list */}
          {selectedCountry.borders && (
            <BorderCountries borders={selectedCountry.borders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
