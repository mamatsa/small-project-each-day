import { useEffect, useState } from "react";
import { Subject } from "App";
import {
  ErrorMessage,
  OptionItem,
  SubmitButton,
  QuizHeader,
  QuizResult,
} from "./components";

interface QuizProps {
  subject: Subject;
  onQuizRestart: () => void;
}

export interface Question {
  question: string;
  options: [string, string, string, string];
  answer: string;
}

const Quiz = ({ subject, onQuizRestart }: QuizProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Get questions from json file in public directory
    const getQuestions = async () => {
      const response = await fetch("/public/data.json");
      const data = await response.json();
      const quiz = data.quizzes.filter(
        (quiz: { title: string }) => quiz.title === subject,
      );
      setQuestions(quiz[0].questions);
    };
    getQuestions();
  }, [subject]);

  const questionSubmitHandler = () => {
    if (!selectedOption) {
      // No answer is selected
      setError(true);
    } else if (!correctAnswer) {
      // Find out correct answer when user submits his answer
      setCorrectAnswer(questions[progress].answer);
    } else {
      // Next question
      if (correctAnswer === questions[progress].options[selectedOption - 1]) {
        // Increase score if answer is user correct
        setScore(score + 1);
      }
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
    <>
      {progress < 10 && (
        <div className="grid-cols-2 lg:grid">
          {/* Quiz question and progress identifier */}
          <QuizHeader progress={progress} questions={questions} />
          {/* Answer options */}
          <div>
            <div className="space-y-3 sm:space-y-4">
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
            </div>

            {/* Answer submit and next question button */}
            <SubmitButton
              onQuestionSubmit={questionSubmitHandler}
              correctAnswer={correctAnswer}
            />

            {/* Error if no answer is selected on submit */}
            {error && <ErrorMessage />}
          </div>
        </div>
      )}

      {progress === 10 && (
        <QuizResult
          subject={subject}
          onQuizRestart={onQuizRestart}
          score={score}
        />
      )}
    </>
  );
};

export default Quiz;
