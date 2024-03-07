import Image from "next/image";
import { data } from "../_data";
import {
  Description,
  InfoBox,
  InnerNavigation,
  PlanetImage,
} from "./components/";

interface PlanetProps {
  params: { planet: string };
}

export default function PlanetPage({ params }: PlanetProps) {
  const selectedPlanet = data.filter(
    (planet) => planet.name === params.planet,
  )[0];

  return (
    <div className="flex flex-col justify-evenly px-4 py-8 text-white lg:px-40">
      {/* top  */}
      <div className="flex flex-col justify-evenly gap-4 md:flex-row lg:grid lg:grid-cols-3">
        <PlanetImage selectedPlanet={selectedPlanet} />
        <div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-3 md:block">
          <div className="text-center sm:text-left">
            <h1 className="mb-6 text-6xl uppercase 2xl:text-8xl">
              {selectedPlanet.name}
            </h1>
            <Description selectedPlanet={selectedPlanet} />
            <p className="mb-4 flex justify-center gap-2 text-sm opacity-50 sm:justify-normal 2xl:text-lg">
              Source:
              <a
                href={selectedPlanet.overview.source}
                className="flex items-center gap-1 font-bold underline"
                target="_blank"
              >
                Wikipedia
                <Image
                  src="/images/icons/icon-source.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </a>
            </p>
          </div>

          <InnerNavigation currentPlanet={params.planet} />
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-4 md:absolute md:bottom-6 md:left-10 md:right-10 md:gap-7 xl:left-40 xl:right-40">
        <InfoBox label="ROTATION TIME" data={selectedPlanet.rotation} />
        <InfoBox label="REVOLUTION TIME" data={selectedPlanet.revolution} />
        <InfoBox label="RADIUS" data={selectedPlanet.radius} />
        <InfoBox label="AVERAGE TEMP." data={selectedPlanet.temperature} />
      </div>
    </div>
  );
}
