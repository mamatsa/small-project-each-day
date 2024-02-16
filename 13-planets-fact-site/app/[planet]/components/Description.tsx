"use client";

import { Planet } from "../page";
import { useSearchParams } from "next/navigation";

const Description = ({ selectedPlanet }: { selectedPlanet: Planet }) => {
  const searchParams = useSearchParams();
  const display = searchParams.get("display");

  // Display text based on search params
  let content = "";
  if (!display) {
    content = selectedPlanet.overview.content;
  } else if (display === "structure") {
    content = selectedPlanet.structure.content;
  } else if (display === "geology") {
    content = selectedPlanet.geology.content;
  }

  return <p className="mb-5 h-28 w-[40ch] text-sm">{content}</p>;
};

export default Description;
