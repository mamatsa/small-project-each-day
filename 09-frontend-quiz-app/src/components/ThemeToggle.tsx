import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { DarkModeIcon, LightModeIcon } from "components";

interface ThemeToggleProps {
  onThemeChange: () => void;
  darkTheme: boolean;
}

const ThemeToggle = ({ onThemeChange, darkTheme }: ThemeToggleProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(darkTheme);
  }, [darkTheme]);

  const themeChangeHandler = (checked: boolean) => {
    setDarkMode(checked);
    onThemeChange();
    if (checked) localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <LightModeIcon />
      <Switch
        checked={darkMode}
        onChange={(checked: boolean) => {
          themeChangeHandler(checked);
        }}
        className="relative inline-flex h-5 w-8 items-center rounded-full bg-purple sm:h-6 sm:w-10"
      >
        <span
          className={`${
            darkMode ? "translate-x-4 sm:translate-x-5" : "translate-x-1"
          } inline-block h-3 w-3 transform rounded-full bg-white transition sm:h-4 sm:w-4`}
        />
      </Switch>
      <DarkModeIcon />
    </div>
  );
};

export default ThemeToggle;
