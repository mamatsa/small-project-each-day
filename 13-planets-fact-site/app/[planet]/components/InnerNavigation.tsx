"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const InnerNavigation = ({ currentPlanet }: { currentPlanet: string }) => {
  const searchParams = useSearchParams();

  const display = searchParams.get("display");

  let bgColor = "";
  switch (currentPlanet) {
    case "mercury": {
      bgColor = "bg-mercury";
      break;
    }
    case "venus": {
      bgColor = "bg-venus";
      break;
    }
    case "earth": {
      bgColor = "bg-earth";
      break;
    }
    case "mars": {
      bgColor = "bg-mars";
      break;
    }
    case "jupiter": {
      bgColor = "bg-jupiter";
      break;
    }
    case "saturn": {
      bgColor = "bg-saturn";
      break;
    }
    case "uranus": {
      bgColor = "bg-uranus";
      break;
    }
    case "neptune": {
      bgColor = "bg-neptune";
      break;
    }
  }

  return (
    <nav>
      <Link href={currentPlanet}>
        <div
          className={`mb-3 cursor-pointer border border-dark-gray px-6 py-3 text-xs font-bold tracking-widest ${!display ? bgColor : "hover:bg-dark-gray"}`}
        >
          <p className="align-middle text-white">
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
          className={`mb-3 cursor-pointer border border-dark-gray px-6 py-3 text-xs font-bold tracking-widest ${display === "structure" ? bgColor : "hover:bg-dark-gray"}`}
        >
          <p className="align-middle text-white">
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
          className={`border border-dark-gray px-6 py-3 text-xs font-bold tracking-widest ${display === "geology" ? bgColor : "hover:bg-dark-gray"}`}
        >
          <p className="align-middle text-white">
            <span className="pr-3 text-gray">03</span> SURFACE GEOLOGY
          </p>
        </div>
      </Link>
    </nav>
  );
};

export default InnerNavigation;
