import { useState, useLayoutEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set dark theme if it's saved in localstorage or it is system preference
  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const handleToggleDarkMode = (darkModeIsOn: boolean) => {
    if (darkModeIsOn) localStorage.theme = "dark";
    else localStorage.theme = "light";
    setDarkMode(darkModeIsOn);
  };

  return { darkMode, toggleDarkMode: handleToggleDarkMode };
};

export default useDarkMode;
