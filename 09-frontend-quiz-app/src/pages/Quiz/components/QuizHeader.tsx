import { Question } from "../Quiz.tsx";

interface QuizHeaderProps {
  questions: Question[];
  progress: number;
}

const QuizHeader = ({ questions, progress }: QuizHeaderProps) => {
  return (
    <div>
      <p className="mb-3 text-sm italic">Question {progress + 1} of 10</p>
      <h2 className="mb-6 text-xl font-medium">
        {questions[progress]?.question}
      </h2>
      <div className="mb-8 h-2.5 w-full rounded-full bg-white">
        <div
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: progress * 10 + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default QuizHeader;
