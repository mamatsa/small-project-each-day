import { useState } from "react";
import { IconAdvanced, IconArcade, IconPro } from "components";
import { PeriodSwitch, Section, OptionItem, Title } from "./components";
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
      <Title
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form
        className="space-y-3 md:space-y-6"
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
        <div className="space-y-3 md:grid md:grid-cols-3 md:space-x-3 md:space-y-0">
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
        </div>

        <PeriodSwitch yearly={yearly} setYearly={setYearly} />
      </form>
    </Section>
  );
};

export default SelectPlan;
