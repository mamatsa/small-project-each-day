import { useState } from "react";
import { IconAdvanced, IconArcade, IconPro } from "components";
import { PeriodSwitch, Section, SelectOption } from "./components";

const SelectPlan = () => {
  const [selectedOption, setSelectedOption] = useState("Arcade");
  const [yearly, setYearly] = useState(false);

  return (
    <Section>
      <h1 className="text-2xl font-bold text-marine-blue">Select your plan</h1>
      <p className="mb-5 mt-1 text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="space-y-3">
        <SelectOption
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title="Arcade"
          price={9}
          yearly={yearly}
        >
          <IconArcade />
        </SelectOption>

        <SelectOption
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title="Advanced"
          price={12}
          yearly={yearly}
        >
          <IconAdvanced />
        </SelectOption>

        <SelectOption
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          title="Pro"
          price={15}
          yearly={yearly}
        >
          <IconPro />
        </SelectOption>
      </div>

      <PeriodSwitch yearly={yearly} setYearly={setYearly} />
    </Section>
  );
};

export default SelectPlan;
