import { useState } from "react";
import { Welcome, Quiz } from "pages";

export type Subject = "HTML" | "CSS" | "JavaScript" | "Accessibility" | "";

const App = () => {
  const [quizSubject, setQuizSubject] = useState<Subject>("");
  const quizChooseHnadler = (subject?: Subject) => {
    setQuizSubject(subject || "");
  };

  return (
    <div className="bg-pattern-mobile sm:bg-pattern-tablet lg:bg-pattern-desktop h-screen bg-light-gray bg-no-repeat p-6">
      {!quizSubject && <Welcome onQuizChoose={quizChooseHnadler} />}
      {quizSubject && (
        <Quiz subject={quizSubject} onQuizRestart={quizChooseHnadler} />
      )}
    </div>
  );
};

export default App;
