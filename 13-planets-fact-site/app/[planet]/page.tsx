import { promises as fs } from "fs";
import Image from "next/image";
import {
  Description,
  InfoBox,
  InnerNavigation,
  PlanetImage,
} from "./components/";

interface PlanetProps {
  params: { planet: string };
}

export interface Planet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
    width: number;
  };
}

export default async function PlanetPage({ params }: PlanetProps) {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: Planet[] = JSON.parse(file);
  const selectedPlanet = data.filter(
    (planet) => planet.name === params.planet,
  )[0];

  return (
    <div className="flex flex-col justify-evenly px-40 py-8 text-white">
      {/* top  */}
      <div className="relative grid grid-cols-3">
        <PlanetImage selectedPlanet={selectedPlanet} />
        <div>
          <h1 className="mb-6 text-6xl uppercase">{selectedPlanet.name}</h1>
          <Description selectedPlanet={selectedPlanet} />
          <p className="mb-4 flex gap-2 text-sm opacity-50">
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

          <InnerNavigation currentPlanet={params.planet} />
        </div>
      </div>

      {/* bottom */}
      <div className="absolute bottom-6 left-40 right-40 grid grid-cols-4 gap-7">
        <InfoBox label="ROTATION TIME" data={selectedPlanet.rotation} />
        <InfoBox label="REVOLUTION TIME" data={selectedPlanet.revolution} />
        <InfoBox label="RADIUS" data={selectedPlanet.radius} />
        <InfoBox label="AVERAGE TEMP." data={selectedPlanet.temperature} />
      </div>
    </div>
  );
}
