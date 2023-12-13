import { useState } from "react";
import { Switch } from "@headlessui/react";
import { DarkModeIcon, LightModeIcon } from "components";

interface ThemeToggleProps {
  onThemeChange: () => void;
}

const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="h-4 w-4">
        <LightModeIcon />
      </div>
      <Switch
        checked={darkMode}
        onChange={(checked) => {
          setDarkMode(checked);
          onThemeChange();
        }}
        className="relative inline-flex h-5 w-8 items-center rounded-full bg-purple"
      >
        <span
          className={`${
            darkMode ? "translate-x-4" : "translate-x-1"
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
