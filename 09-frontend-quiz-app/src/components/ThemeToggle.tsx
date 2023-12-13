import { useState } from "react";
import { Switch } from "@headlessui/react";
import { DarkModeIcon, LightModeIcon } from "components";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="h-4 w-4">
        <LightModeIcon />
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="relative inline-flex h-5 w-8 items-center rounded-full bg-purple"
      >
        <span
          className={`${
            enabled ? "translate-x-4" : "translate-x-1"
          } inline-block h-3 w-3 transform rounded-full bg-white transition`}
        />
      </Switch>
      <div className="h-4 w-4">
        <DarkModeIcon />
      </div>
    </div>
  );
};

export default ThemeToggle;
