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
      <h1 className="my-8 text-[40px] font-light leading-tight">
        Quiz completed
        <span className="block font-medium">You scored...</span>
      </h1>
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white p-8">
        <h2 className="flex items-center gap-4 text-lg font-medium">
          <span className="block h-10 w-10">
            <QuizIcon />
          </span>
          {subject}
        </h2>
        <p className="text-[88px] font-medium">{score}</p>
        <p className="text-lg">out of 10</p>
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
