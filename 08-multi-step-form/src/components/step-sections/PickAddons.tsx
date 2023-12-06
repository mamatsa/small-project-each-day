import { useState } from "react";
import { Section } from "./components";
import AddonItem from "./components/AddonItem";

interface PickAddonsProps {
  yearly: boolean;
}

const PickAddons = ({ yearly }: PickAddonsProps) => {
  const [selectedAddons, setSelectedAddons] = useState({
    "Online service": false,
    "Larger storage": false,
    "Customizable profile": false,
  });

  return (
    <Section>
      <h1 className="text-2xl font-bold text-marine-blue">Pick add-ons</h1>
      <p className="mb-4 mt-1 text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="space-y-3">
        <AddonItem
          title="Online service"
          about="Access to multiplayer games"
          price={1}
          yearly={yearly}
          selected={selectedAddons["Online service"]}
          setSelectedAddons={setSelectedAddons}
        />

        <AddonItem
          title="Larger storage"
          about="Extra 1TB of cloud save"
          price={2}
          yearly={yearly}
          selected={selectedAddons["Larger storage"]}
          setSelectedAddons={setSelectedAddons}
        />

        <AddonItem
          title="Customizable profile"
          about="Custom theme on your profile"
          price={2}
          yearly={yearly}
          selected={selectedAddons["Customizable profile"]}
          setSelectedAddons={setSelectedAddons}
        />
      </div>
    </Section>
  );
};

export default PickAddons;
