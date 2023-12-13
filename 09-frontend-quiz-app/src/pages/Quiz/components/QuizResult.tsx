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
      <h1 className="mb-6 text-4xl font-light leading-tight dark:text-white sm:mb-8 sm:text-5xl">
        Quiz completed
        <span className="block font-medium dark:text-white">You scored...</span>
      </h1>
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white p-8 dark:bg-navy">
        <h2 className="flex items-center gap-4 text-lg font-medium dark:text-white sm:text-xl">
          <QuizIcon />
          {subject}
        </h2>
        <p className="my-6 text-7xl font-medium dark:text-white sm:text-8xl">
          {score}
        </p>
        <p className="text-lg text-gray-navy dark:text-light-blue sm:text-xl">
          out of 10
        </p>
      </div>
      <button
        className="my-3 w-full rounded-xl bg-purple py-4 text-lg font-medium text-white sm:my-5"
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
