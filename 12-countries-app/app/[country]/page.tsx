import { promises as fs } from "fs";
import Image from "next/image";
import { Country } from "@/app/page";
import { CountryDetail, GoBackButton } from "./components/";

const CountryPage = async ({ params }: { params: { country: string } }) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const countries: Country[] = JSON.parse(file);
  const selectedCountry = countries.find(
    (country) => country.alpha2Code === params.country,
  );

  return (
    <>
      {selectedCountry && (
        <div className="px-7 py-6">
          <GoBackButton />
          <Image
            src={selectedCountry.flags.svg}
            alt="flag"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full rounded"
            priority={true}
          />
          <h1 className="mb-4 mt-10 text-2xl font-extrabold">
            {selectedCountry.name}
          </h1>

          <div>
            <CountryDetail label={"Native Name: "}>
              {selectedCountry.nativeName}
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
              {selectedCountry.capital}
            </CountryDetail>
          </div>

          <div className="my-8">
            <CountryDetail label={"Top Level Domain: "}>
              {selectedCountry.topLevelDomain?.map((domain, index) => (
                <span key={domain}>{(index ? ", " : "") + domain}</span>
              ))}
            </CountryDetail>

            <CountryDetail label={"Currencies: "}>
              {selectedCountry.currencies?.map((curr, index) => (
                <span key={curr.code}>{(index ? ", " : "") + curr.code}</span>
              ))}
            </CountryDetail>

            <CountryDetail label={"Languages: "}>
              {selectedCountry.languages?.map((lang, index) => (
                <span key={lang.name}>{(index ? ", " : "") + lang.name}</span>
              ))}
            </CountryDetail>
          </div>

          {selectedCountry.borders && (
            <div>
              <h3 className="mb-3 font-semibold">Border Countries:</h3>
              <div className="flex flex-wrap items-center gap-2">
                {selectedCountry.borders.map((border) => (
                  <span
                    key={border}
                    className="rounded-sm bg-white px-5 py-1 text-xs font-light shadow-md"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CountryPage;
