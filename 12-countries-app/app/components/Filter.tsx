"use client";

import { useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { DropdownExpandIcon } from "@/app/components";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const regionParam = searchParams.get("region") || "All";

  const handleFilter = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (region === "All") {
      params.delete("region");
    } else {
      params.set("region", region);
    }
    replace(`${pathname}?${params.toString()}`);

    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details ref={detailsRef} className="dropdown mb-5 md:mb-0">
      <summary className="btn flex w-44 items-center gap-6 border-none bg-white text-sm hover:bg-light-gray dark:bg-blue-700 2xl:h-16 2xl:w-52 2xl:text-base">
        <span>Filter by Region</span>
        <DropdownExpandIcon />
      </summary>
      <ul className="menu dropdown-content z-[1] mt-1 w-44 space-y-0.5 rounded-lg bg-white p-2 shadow dark:bg-blue-700 2xl:w-52 2xl:text-base">
        {regions.map((region) => (
          <li key={region}>
            <a
              className={`hover:bg-gray hover:text-blue-900 ${
                region === regionParam &&
                "bg-blue-700 text-white dark:bg-light-gray dark:text-blue-900"
              }`}
              onClick={() => handleFilter(region)}
            >
              {region}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Filter;
