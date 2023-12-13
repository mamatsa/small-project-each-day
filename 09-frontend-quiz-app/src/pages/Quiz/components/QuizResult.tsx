import { Subject } from "App";
import { HTMLLogo, CSSLogo, JavaScriptLogo, Accessibility } from "components";

interface QuizResultProps {
  subject: Subject;
  onQuizRestart: () => void;
  score: number;
}

const quizIcons = {
  HTML: HTMLLogo,
  CSS: CSSLogo,
  JavaScript: JavaScriptLogo,
  Accessibility: Accessibility,
};

const QuizResult = ({ subject, onQuizRestart, score }: QuizResultProps) => {
  const QuizIcon = quizIcons[subject || "HTML"];
  return (
    <div>
      <h1 className="mb-6 text-[40px] font-light leading-tight dark:text-white">
        Quiz completed
        <span className="block font-medium dark:text-white">You scored...</span>
      </h1>
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white p-8 dark:bg-navy">
        <h2 className="flex items-center gap-4 text-lg font-medium dark:text-white">
          <QuizIcon />
          {subject}
        </h2>
        <p className="text-[88px] font-medium dark:text-white">{score}</p>
        <p className="text-lg dark:text-light-blue">out of 10</p>
      </div>
      <button
        className="my-3 w-full rounded-xl bg-purple py-4 text-lg font-medium text-white"
        onClick={() => {
          onQuizRestart();
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default QuizResult;
