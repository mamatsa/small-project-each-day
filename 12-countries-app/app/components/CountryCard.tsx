import { Country } from "../page";
import Image from "next/image";

interface CountryProps {
  country: Country;
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <li className="max-w-72 rounded-md bg-white shadow">
      <Image
        src={country.flags.svg}
        alt="flag"
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-full rounded-t-md"
        priority={true}
      />
      <div className="p-6">
        <h3 className="mb-4 text-lg font-extrabold">{country.name}</h3>
        <p className="text-sm">
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <p className="text-sm">
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p className="text-sm">
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </li>
  );
};

export default CountryCard;
