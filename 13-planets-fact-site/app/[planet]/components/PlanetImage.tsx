"use client";

import { Planet } from "../page";
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
    <div className="col-start-1 col-end-3 place-self-center">
      <Image
        src={imageSrc}
        alt={selectedPlanet.name}
        width={selectedPlanet.images.width / 1.2}
        height={selectedPlanet.images.width / 1.2}
        priority
      />
      {display === "geology" && (
        <div className="absolute bottom-0 left-1/3 flex -translate-x-1/2 justify-center">
          <Image
            src={selectedPlanet.images.geology}
            alt={selectedPlanet.name}
            width={129}
            height={129}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default PlanetImage;
