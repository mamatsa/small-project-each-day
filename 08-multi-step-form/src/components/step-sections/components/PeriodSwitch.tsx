import { Switch } from "@headlessui/react";

interface PeriodSwitchProps {
  yearly: boolean;
  setYearly: React.Dispatch<React.SetStateAction<boolean>>;
}

const PeriodSwitch = ({ yearly, setYearly }: PeriodSwitchProps) => {
  return (
    <Switch.Group>
      <div className="mt-6 flex items-center justify-center gap-3 rounded-md bg-magnolia py-3">
        <Switch.Label
          className={`text-sm font-medium ${
            yearly ? "text-cool-gray" : "text-marine-blue"
          }`}
        >
          Monthly
        </Switch.Label>
        <Switch
          checked={yearly}
          onChange={setYearly}
          className={`relative inline-flex h-6 w-11 items-center rounded-full bg-marine-blue`}
        >
          <span
            className={`${
              yearly ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <Switch.Label
          className={`text-sm font-medium ${
            yearly ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Yearly
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};

export default PeriodSwitch;
