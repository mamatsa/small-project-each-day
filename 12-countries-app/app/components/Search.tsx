"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SearchIcon } from "@/app/components";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (country: string) => {
    const params = new URLSearchParams(searchParams);
    if (country) {
      params.set("search", country);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative mb-10 flex flex-1 flex-shrink-0 ">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <SearchIcon />
      <input
        id="search"
        className="input w-full bg-white py-4 pl-16 pr-2 text-sm shadow-sm placeholder:text-dark-gray focus:border-none focus:outline-dark-gray"
        placeholder="Search for a country..."
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
