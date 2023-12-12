import { useEffect, useState } from "react";
import {
  ErrorMessage,
  OptionItem,
  SubmitButton,
  QuizHeader,
} from "./components";

interface QuizProps {
  subject: string;
}

export interface Question {
  question: string;
  options: [string, string, string, string];
  answer: string;
}

const Quiz = ({ subject }: QuizProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Get questions from json file in public directory
    const getQuestions = async () => {
      const response = await fetch("/public/data.json");
      const data = await response.json();
      const quizQuestions = data.quizzes.filter(
        (quiz: { title: string }) => quiz.title === subject,
      );
      setQuestions(quizQuestions[0].questions);
    };
    getQuestions();
  }, [subject]);

  const questionSubmitHandler = () => {
    if (!selectedOption) {
      setError(true);
    } else if (!correctAnswer) {
      setCorrectAnswer(questions[progress].answer);
    } else {
      setCorrectAnswer("");
      setProgress(progress + 1);
      setSelectedOption(0);
    }
  };

  const optionSelectHandler = (optionIndex: number) => {
    setSelectedOption(optionIndex + 1);
    setError(false);
  };

  return (
    <div>
      {/* Quiz question and progress identifier */}
      <QuizHeader progress={progress} questions={questions} />
      {/* Answer options */}
      <ul className="space-y-3">
        {questions[progress]?.options.map((option, index) => {
          return (
            <OptionItem
              optionIndex={index}
              option={option}
              correctAnswer={correctAnswer}
              onOptionSelect={optionSelectHandler}
              selectedOption={selectedOption}
              key={option}
            />
          );
        })}
      </ul>

      {/* Answer submit and next question button */}
      <SubmitButton
        onQuestionSubmit={questionSubmitHandler}
        correctAnswer={correctAnswer}
      />

      {/* Error if no answer is selected on submit */}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Quiz;
