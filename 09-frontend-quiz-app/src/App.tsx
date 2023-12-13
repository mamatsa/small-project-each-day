import { useState } from "react";
import { Welcome, Quiz } from "pages";
import { Navbar } from "components";

export type Subject = "HTML" | "CSS" | "JavaScript" | "Accessibility" | "";

const App = () => {
  const [quizSubject, setQuizSubject] = useState<Subject>("");
  const [darkMode, setDarkMode] = useState(false);

  const quizChooseHnadler = (subject?: Subject) => {
    setQuizSubject(subject || "");
  };

  const themeChangeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen w-full ${darkMode && "dark"}`}>
      <div className="bg-pattern-mobile sm:bg-pattern-tablet lg:bg-pattern-desktop dark:bg-pattern-mobile-dark dark:sm:bg-pattern-tablet-dark dark:lg:bg-pattern-desktop-dark h-screen bg-light-gray bg-no-repeat px-6 pb-6 dark:bg-dark-navy sm:px-16 lg:px-24">
        <Navbar quizSubject={quizSubject} onThemeChange={themeChangeHandler} />

        {/* Display welcome page if quiz subject is not picked yet */}
        {!quizSubject && <Welcome onQuizChoose={quizChooseHnadler} />}

        {/* Display appropriate quiz after user chooses topic */}
        {quizSubject && (
          <Quiz subject={quizSubject} onQuizRestart={quizChooseHnadler} />
        )}
      </div>
    </div>
  );
};

export default App;
