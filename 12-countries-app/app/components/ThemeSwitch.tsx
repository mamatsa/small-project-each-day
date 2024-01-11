"use client";

import { MoonIcon } from "@/app/components";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <button
      className="flex items-end gap-2 text-xs font-semibold sm:gap-3 sm:text-sm lg:gap-4 lg:text-base 2xl:text-lg"
      onClick={handleThemeToggle}
    >
      <MoonIcon />
      <span className="-mb-[2px] self-end">Dark Mode</span>
    </button>
  );
};

export default ThemeSwitch;
