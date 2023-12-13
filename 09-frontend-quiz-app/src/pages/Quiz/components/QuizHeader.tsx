import { Question } from "../Quiz.tsx";

interface QuizHeaderProps {
  questions: Question[];
  progress: number;
}

const QuizHeader = ({ questions, progress }: QuizHeaderProps) => {
  return (
    <div className="pr-20">
      <p className="mb-3 text-sm italic dark:text-light-blue lg:text-base">
        Question {progress + 1} of 10
      </p>
      <h2 className="mb-6 text-xl font-medium dark:text-white sm:text-2xl lg:text-3xl">
        {questions[progress]?.question}
      </h2>
      <div className="mb-8 h-4 w-full rounded-full bg-white p-1 dark:bg-navy">
        <div
          className="h-2 rounded-full bg-purple"
          style={{ width: (progress + 1) * 10 + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default QuizHeader;
