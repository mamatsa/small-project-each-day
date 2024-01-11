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
                {selectedCountry.name}
              </h1>

              <div className="md:flex md:gap-8 lg:gap-12 xl:gap-20 2xl:gap-32">
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

                <div className="my-8 md:my-0">
                  <CountryDetail label={"Top Level Domain: "}>
                    {selectedCountry.topLevelDomain?.map((domain, index) => (
                      <span key={domain}>{(index ? ", " : "") + domain}</span>
                    ))}
                  </CountryDetail>

                  <CountryDetail label={"Currencies: "}>
                    {selectedCountry.currencies?.map((curr, index) => (
                      <span key={curr.code}>
                        {(index ? ", " : "") + curr.code}
                      </span>
                    ))}
                  </CountryDetail>

                  <CountryDetail label={"Languages: "}>
                    {selectedCountry.languages?.map((lang, index) => (
                      <span key={lang.name}>
                        {(index ? ", " : "") + lang.name}
                      </span>
                    ))}
                  </CountryDetail>
                </div>
              </div>

              {selectedCountry.borders && (
                <div className="md:mt-6 md:flex md:items-center md:gap-4 lg:mt-10">
                  <h3 className="mb-3 whitespace-nowrap font-semibold md:mb-0 2xl:text-lg">
                    Border Countries:
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedCountry.borders.map((border) => (
                      <span
                        key={border}
                        className="rounded-sm bg-white px-5 py-1 text-xs font-light shadow-md 2xl:text-base"
                      >
                        {border}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryPage;
