import { Country } from "@/app/page";
import Image from "next/image";

interface CountryProps {
  country: Country;
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <li className="overflow-hidden rounded-md bg-white shadow dark:bg-blue-700">
      <div className="flex w-full items-center justify-center overflow-hidden sm:h-[120px] md:h-[180px] 2xl:h-[220px]">
        <Image
          src={country.flags.svg}
          alt="flag"
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full overflow-hidden"
          priority={true}
        />
      </div>
      <div className="p-6 pb-12">
        <h3 className="mb-4 text-lg font-extrabold 2xl:text-xl">
          {country.name}
        </h3>
        <p className="text-sm 2xl:text-base">
          <span className="font-bold">Population:</span>{" "}
          {country.population.toLocaleString("en-US")}
        </p>
        <p className="text-sm 2xl:text-base">
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p className="text-sm 2xl:text-base">
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </li>
  );
};

export default CountryCard;
