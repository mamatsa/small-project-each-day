import { useState, useLayoutEffect } from "react";

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState<"sans" | "serif" | "mono">(
    "sans",
  );

  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }

    setFontFamily(localStorage.fontFamily || "sans");
  }, []);

  const handleFontChange = (font: "sans" | "serif" | "mono") => {
    setFontFamily(font);
    localStorage.setItem("fontFamily", font);
  };

  const handleDarkModeToggle = () => {
    if (darkMode) localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
    setDarkMode(!darkMode);
  };

  return {
    darkMode: darkMode,
    fontFamily: fontFamily,
    changeFont: handleFontChange,
    toggleDarkMode: handleDarkModeToggle,
  };
};

export default useTheme;
