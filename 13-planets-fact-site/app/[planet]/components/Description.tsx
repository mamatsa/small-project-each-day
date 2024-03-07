import { Planet } from "@/app/_data";

interface DescriptionProps {
  selectedPlanet: Planet;
  display?: string;
}

const Description = ({ selectedPlanet, display }: DescriptionProps) => {
  // Display text based on search params
  let content = "";
  if (!display) {
    content = selectedPlanet.overview.content;
  } else if (display === "structure") {
    content = selectedPlanet.structure.content;
  } else if (display === "geology") {
    content = selectedPlanet.geology.content;
  }

  return (
    <p className="mb-5 w-full text-base sm:h-28 sm:text-sm md:w-[40ch] 2xl:h-36 2xl:text-lg">
      {content}
    </p>
  );
};

export default Description;
