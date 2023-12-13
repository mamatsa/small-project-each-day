import { useState } from "react";
import { Welcome, Quiz } from "pages";
import { Navbar } from "components";

export type Subject = "HTML" | "CSS" | "JavaScript" | "Accessibility" | "";

const App = () => {
  const [quizSubject, setQuizSubject] = useState<Subject>("");
  const quizChooseHnadler = (subject?: Subject) => {
    setQuizSubject(subject || "");
  };

  return (
    <div className="bg-pattern-mobile sm:bg-pattern-tablet lg:bg-pattern-desktop h-screen bg-light-gray bg-no-repeat px-6 pb-6">
      <Navbar quizSubject={quizSubject} />

      {/* Display welcome page if quiz subject is not picked yet */}
      {!quizSubject && <Welcome onQuizChoose={quizChooseHnadler} />}

      {/* Display appropriate quiz after user chooses topic */}
      {quizSubject && (
        <Quiz subject={quizSubject} onQuizRestart={quizChooseHnadler} />
      )}
    </div>
  );
};

export default App;
