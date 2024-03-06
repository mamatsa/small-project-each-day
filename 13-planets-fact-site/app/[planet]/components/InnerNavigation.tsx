"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const InnerNavigation = ({ currentPlanet }: { currentPlanet: string }) => {
  const searchParams = useSearchParams();

  const display = searchParams.get("display");

  let bgColor = "";
  let borderColor = "";
  switch (currentPlanet) {
    case "mercury": {
      bgColor = "bg-mercury";
      borderColor = "border-b-mercury";
      break;
    }
    case "venus": {
      bgColor = "bg-venus";
      borderColor = "border-b-venus";

      break;
    }
    case "earth": {
      bgColor = "bg-earth";
      borderColor = "border-b-earth";

      break;
    }
    case "mars": {
      bgColor = "bg-mars";
      borderColor = "border-b-mars";

      break;
    }
    case "jupiter": {
      bgColor = "bg-jupiter";
      borderColor = "border-b-jupiter";

      break;
    }
    case "saturn": {
      bgColor = "bg-saturn";
      borderColor = "border-b-saturn";

      break;
    }
    case "uranus": {
      bgColor = "bg-uranus";
      borderColor = "border-b-uranus";

      break;
    }
    case "neptune": {
      bgColor = "bg-neptune";
      borderColor = "border-b-neptune";
      break;
    }
  }

  return (
    <>
      <nav className="hidden sm:block">
        <Link href={currentPlanet}>
          <div
            className={`mb-3 cursor-pointer border border-dark-gray px-6 py-3 text-xs font-bold tracking-widest 2xl:text-base ${!display ? bgColor : "hover:bg-dark-gray"}`}
          >
            <p className="whitespace-nowrap align-middle text-white">
              <span className="pr-3 text-gray">01</span> OVERVIEW
            </p>
          </div>
        </Link>

        <Link
          href={{
            pathname: currentPlanet,
            query: { display: "structure" },
          }}
        >
          <div
            className={`mb-3 cursor-pointer border border-dark-gray px-6 py-3 text-xs font-bold tracking-widest 2xl:text-base ${display === "structure" ? bgColor : "hover:bg-dark-gray"}`}
          >
            <p className="whitespace-nowrap align-middle text-white">
              <span className="pr-3 text-gray">02</span> INTERNAL STRUCTURE
            </p>
          </div>
        </Link>

        <Link
          href={{
            pathname: currentPlanet,
            query: { display: "geology" },
          }}
        >
          <div
            className={`border border-dark-gray px-6 py-3 text-xs font-bold tracking-widest 2xl:text-base ${display === "geology" ? bgColor : "hover:bg-dark-gray"}`}
          >
            <p className="whitespace-nowrap align-middle text-white">
              <span className="pr-3 text-gray">03</span> SURFACE GEOLOGY
            </p>
          </div>
        </Link>
      </nav>

      {/* Inner Navigation for mobile */}
      <nav className="absolute left-0 right-0 top-16 flex justify-between border-b  border-b-white border-opacity-20 px-6 sm:hidden">
        <Link href={currentPlanet}>
          <div
            className={`h-full cursor-pointer py-4 text-xs font-bold ${!display && `border-b-2 ${borderColor}`}`}
          >
            <p className=" text-white">OVERVIEW</p>
          </div>
        </Link>

        <Link
          href={{
            pathname: currentPlanet,
            query: { display: "structure" },
          }}
        >
          <div
            className={`h-full cursor-pointer py-4 text-xs font-bold ${display === "structure" && `border-b-2 ${borderColor}`}`}
          >
            <p className=" text-white">STRUCTURE</p>
          </div>
        </Link>

        <Link
          href={{
            pathname: currentPlanet,
            query: { display: "geology" },
          }}
        >
          <div
            className={`h-full cursor-pointer py-4 text-xs font-bold ${display === "geology" && `border-b-2 ${borderColor}`}`}
          >
            <p className=" text-white">SURFACE</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default InnerNavigation;
