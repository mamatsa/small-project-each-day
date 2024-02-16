import { promises as fs } from "fs";
import Image from "next/image";
import { InfoBox, InnerNavigation } from "./components/";

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
      <div className="grid grid-cols-3">
        <div className="col-start-1 col-end-3 place-self-center">
          <Image
            src={selectedPlanet.images.planet}
            alt={selectedPlanet.name}
            width={selectedPlanet.images.width / 1.25}
            height={selectedPlanet.images.width / 1.25}
            priority
          />
        </div>
        <div>
          <h1 className="mb-6 text-7xl uppercase">{selectedPlanet.name}</h1>
          <p className="mb-5 w-[40ch] text-sm">
            {selectedPlanet.overview.content}
          </p>
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
                alt={selectedPlanet.name}
                width={12}
                height={12}
              />
            </a>
          </p>

          <InnerNavigation currentPlanet={params.planet} />
        </div>
      </div>

      {/* bottom */}
      <div className="absolute bottom-6 left-40 right-40 grid grid-cols-4 gap-7 justify-self-end">
        <InfoBox label="ROTATION TIME" data={selectedPlanet.rotation} />
        <InfoBox label="REVOLUTION TIME" data={selectedPlanet.revolution} />
        <InfoBox label="RADIUS" data={selectedPlanet.radius} />
        <InfoBox label="AVERAGE TEMP." data={selectedPlanet.temperature} />
      </div>
    </div>
  );
}
