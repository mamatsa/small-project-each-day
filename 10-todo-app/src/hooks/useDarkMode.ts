import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set dark theme if it's saved in localstorage or it is system preference
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const handleDarkThemeToggle = (darkModeIsOn: boolean) => {
    if (darkModeIsOn) localStorage.theme = "light";
    else localStorage.theme = "dark";
    setDarkMode(darkModeIsOn);
  };

  return { darkMode, toggleDarkMode: handleDarkThemeToggle };
};

export default useDarkMode;
