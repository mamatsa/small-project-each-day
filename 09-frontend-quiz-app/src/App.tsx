import { useState, useEffect } from "react";
import { Welcome, Quiz } from "pages";
import { Navbar } from "components";

export type Subject = "HTML" | "CSS" | "JavaScript" | "Accessibility" | "";

const App = () => {
  const [quizSubject, setQuizSubject] = useState<Subject>("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Set dark theme if it's saved in localstorage or it is system preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const quizChooseHnadler = (subject?: Subject) => {
    setQuizSubject(subject || "");
  };

  const themeChangeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen w-full ${darkMode && "dark"}`}>
      <div className="h-min w-full bg-light-gray bg-pattern-mobile bg-cover bg-no-repeat px-6 dark:bg-dark-navy dark:bg-pattern-mobile-dark sm:bg-pattern-tablet sm:px-16 dark:sm:bg-pattern-tablet-dark lg:bg-pattern-desktop lg:px-24 dark:lg:bg-pattern-desktop-dark">
        <div className="mx-auto h-screen max-w-screen-2xl ">
          <Navbar
            quizSubject={quizSubject}
            onThemeChange={themeChangeHandler}
            darkTheme={darkMode}
          />

          {/* Display welcome page if quiz subject is not picked yet */}
          {!quizSubject && <Welcome onQuizChoose={quizChooseHnadler} />}

          {/* Display appropriate quiz after user chooses topic */}
          {quizSubject && (
            <Quiz subject={quizSubject} onQuizRestart={quizChooseHnadler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
