import { useState } from "react";
import { IconAdvanced, IconArcade, IconPro } from "components";
import { PeriodSwitch, Section, OptionItem } from "./components";
import { FormData } from "App";

const optionPrices = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
};

interface SelectPlanProps {
  onSectionSubmit: (data: FormData) => void;
  formData: FormData;
}

const SelectPlan = ({ onSectionSubmit, formData }: SelectPlanProps) => {
  const [selectedOption, setSelectedOption] = useState(formData.selectedOption);
  const [yearly, setYearly] = useState(formData.yearly);

  return (
    <Section>
      <h1 className="text-2xl font-bold text-marine-blue">Select your plan</h1>
      <p className="mb-5 mt-1 text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <form
        className="space-y-3"
        id="multiStepForm"
        onSubmit={(e) => {
          e.preventDefault();
          onSectionSubmit({
            ...formData,
            selectedOption,
            yearly,
            optionPrice: optionPrices[selectedOption],
          });
        }}
      >
        <OptionItem
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title="Arcade"
          price={optionPrices["Arcade"]}
          yearly={yearly}
        >
          <IconArcade />
        </OptionItem>

        <OptionItem
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title="Advanced"
          price={optionPrices["Advanced"]}
          yearly={yearly}
        >
          <IconAdvanced />
        </OptionItem>

        <OptionItem
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title="Pro"
          price={optionPrices["Pro"]}
          yearly={yearly}
        >
          <IconPro />
        </OptionItem>

        <PeriodSwitch yearly={yearly} setYearly={setYearly} />
      </form>
    </Section>
  );
};

export default SelectPlan;
