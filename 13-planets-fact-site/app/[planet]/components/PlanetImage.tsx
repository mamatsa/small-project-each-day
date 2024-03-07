"use client";

import type { Planet } from "@/app/_data";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const PlanetImage = ({ selectedPlanet }: { selectedPlanet: Planet }) => {
  const searchParams = useSearchParams();
  const display = searchParams.get("display");

  let imageSrc = selectedPlanet.images.planet;
  if (display === "structure") {
    imageSrc = selectedPlanet.images.internal;
  }

  return (
    <div className="relative col-start-1 col-end-3 mb-4 place-self-center sm:mb-0">
      <Image
        src={imageSrc}
        alt={selectedPlanet.name}
        width={selectedPlanet.images.width / 1.2}
        height={selectedPlanet.images.width / 1.2}
        priority
      />
      {display === "geology" && (
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center">
          <Image
            src={selectedPlanet.images.geology}
            alt={selectedPlanet.name}
            width={326}
            height={398}
            priority
            className="h-auto w-[129px]"
          />
        </div>
      )}
    </div>
  );
};

export default PlanetImage;
