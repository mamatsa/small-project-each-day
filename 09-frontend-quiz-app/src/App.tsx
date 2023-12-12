import { useState } from "react";
import { Welcome, Quiz } from "pages";

const App = () => {
  const [quizSubject, setQuizSubject] = useState("");
  const quizChooseHnadler = (subject: string) => {
    setQuizSubject(subject);
  };

  return (
    <div className="bg-light-gray h-screen p-6">
      {!quizSubject && <Welcome onQuizChoose={quizChooseHnadler} />}
      {quizSubject && <Quiz subject={quizSubject} />}
    </div>
  );
};

export default App;
