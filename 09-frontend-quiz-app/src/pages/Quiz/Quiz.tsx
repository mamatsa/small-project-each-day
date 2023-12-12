import { IconCorrect, IconIncorrect } from "components";
import { useEffect, useState } from "react";

interface QuizProps {
  subject: string;
}

interface Question {
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

  return (
    <div>
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

      <ul className="space-y-3">
        {questions[progress]?.options.map((option, index) => {
          return (
            <li
              key={option}
              className={`grid w-full grid-cols-[40px_1fr_28px] items-center rounded-xl bg-white p-3 -outline-offset-[3px] ${
                selectedOption === index + 1 &&
                "outline-purple outline outline-[3px]"
              } ${
                correctAnswer &&
                selectedOption === index + 1 &&
                "outline-green outline outline-[3px]"
              } ${
                correctAnswer &&
                correctAnswer !== option &&
                selectedOption === index + 1 &&
                "outline-red outline outline-[3px]"
              }`}
              onClick={() => {
                setSelectedOption(index + 1);
                setError(false);
              }}
            >
              {/* Question Number */}
              <div
                className={`text-gray-navy bg-light-gray flex h-10 w-10 items-center justify-center rounded-md text-lg font-medium ${
                  selectedOption === index + 1 && "bg-purple text-white"
                } ${
                  correctAnswer &&
                  selectedOption === index + 1 &&
                  "bg-green text-white"
                } ${
                  correctAnswer &&
                  correctAnswer !== option &&
                  selectedOption === index + 1 &&
                  "bg-red"
                }`}
              >
                {index + 1}
              </div>

              {/* Option text */}
              <p className="w-fit break-words pl-3 text-lg font-medium">
                {option}
              </p>

              {/* Correct answer sign */}
              {option === correctAnswer && (
                <div className="h-7 w-7">
                  <IconCorrect />
                </div>
              )}

              {/* Incorrect answer sign */}
              {correctAnswer &&
                option !== correctAnswer &&
                selectedOption === index + 1 && (
                  <div className=" h-7 w-7">
                    <IconIncorrect />
                  </div>
                )}
            </li>
          );
        })}
      </ul>

      <button
        className="bg-purple my-3 w-full rounded-xl py-4 text-lg font-medium text-white"
        onClick={questionSubmitHandler}
      >
        {correctAnswer ? "Next Question" : "Submit Answer"}
      </button>

      {error && (
        <p className="text-red flex w-full items-center justify-center gap-2 text-lg">
          <div className="h-7 w-7">
            <IconIncorrect />
          </div>
          Please select an answer
        </p>
      )}
    </div>
  );
};

export default Quiz;
