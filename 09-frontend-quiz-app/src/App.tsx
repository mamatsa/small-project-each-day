import { useState } from "react";
import { Welcome, Quiz } from "pages";

export type Subject = "HTML" | "CSS" | "JavaScript" | "Accessibility" | "";

const App = () => {
  const [quizSubject, setQuizSubject] = useState<Subject>("");
  const quizChooseHnadler = (subject?: Subject) => {
    setQuizSubject(subject || "");
  };

  return (
    <div className="h-screen bg-light-gray p-6">
      {!quizSubject && <Welcome onQuizChoose={quizChooseHnadler} />}
      {quizSubject && (
        <Quiz subject={quizSubject} onQuizRestart={quizChooseHnadler} />
      )}
    </div>
  );
};

export default App;
