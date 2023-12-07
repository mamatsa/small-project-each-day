import { useState } from "react";
import { Section, AddonItem, Title } from "./components";
import { FormData } from "App";

interface PickAddonsProps {
  yearly: boolean;
  onSectionSubmit: (data: FormData) => void;
  formData: FormData;
}

const PickAddons = ({ yearly, onSectionSubmit, formData }: PickAddonsProps) => {
  const [selectedAddons, setSelectedAddons] = useState(formData);

  return (
    <Section>
      <Title
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <form
        id="multiStepForm"
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSectionSubmit(selectedAddons);
        }}
      >
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
      </form>
    </Section>
  );
};

export default PickAddons;
