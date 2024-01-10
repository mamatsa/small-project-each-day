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
    <details ref={detailsRef} className="dropdown mb-5">
      <summary className="btn m-1 flex items-center gap-6 border-none bg-white text-sm text-blue-900 hover:bg-light-gray">
        <span>Filter by Region</span>
        <DropdownExpandIcon />
      </summary>
      <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-white p-2 shadow">
        {regions.map((region) => (
          <li key={region}>
            <a
              className={`hover:bg-light-gray ${
                region === regionParam && "bg-blue-700 text-white"
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
