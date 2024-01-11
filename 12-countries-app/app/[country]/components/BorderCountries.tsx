"use client";

import { Country } from "@/app/page";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BorderCountriesProps {
  selectedCountry: Country;
}

const BorderCountries = ({ selectedCountry }: BorderCountriesProps) => {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");
  const filterRegion = searchParams.get("region");

  return (
    <div className="md:mt-6 md:flex md:items-center md:gap-4 lg:mt-10">
      <h3 className="mb-3 whitespace-nowrap font-semibold md:mb-0 2xl:text-lg">
        Border Countries:
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {selectedCountry.borders.map((border) => (
          <Link
            href={{
              pathname: "/" + border,
              query: {
                ...(searchWord && { search: searchWord }),
                ...(filterRegion && { region: filterRegion }),
              },
            }}
            key={border}
            className="rounded-sm bg-white px-5 py-1 text-xs font-light shadow-md hover:scale-110 dark:bg-blue-700 2xl:text-base"
          >
            {border}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BorderCountries;
