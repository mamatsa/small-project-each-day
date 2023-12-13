import { IconCorrect, IconIncorrect } from "components";

interface OptionItemProps {
  option: string;
  correctAnswer: string;
  optionIndex: number;
  selectedOption: number;
  onOptionSelect: (optionIndex: number) => void;
}

const OptionItem = ({
  option,
  correctAnswer,
  optionIndex,
  selectedOption,
  onOptionSelect,
}: OptionItemProps) => {
  return (
    <li
      className={`grid w-full grid-cols-[40px_1fr_28px] items-center rounded-xl bg-white p-3 -outline-offset-[3px] dark:bg-navy ${
        selectedOption === optionIndex + 1 &&
        "outline outline-[3px] outline-purple"
      } ${
        selectedOption === optionIndex + 1 &&
        correctAnswer === option &&
        "outline-success-green outline outline-[3px]"
      } ${
        correctAnswer &&
        selectedOption === optionIndex + 1 &&
        correctAnswer !== option &&
        "outline outline-[3px] outline-red"
      }`}
      onClick={() => {
        if (correctAnswer) return;
        onOptionSelect(optionIndex);
      }}
    >
      {/* Question Number */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-md bg-light-gray text-lg font-medium text-gray-navy ${
          selectedOption === optionIndex + 1 && "bg-purple text-white"
        } ${
          selectedOption === optionIndex + 1 &&
          correctAnswer === option &&
          "bg-success-green text-white"
        } ${
          correctAnswer &&
          selectedOption === optionIndex + 1 &&
          correctAnswer !== option &&
          "bg-red text-white"
        }`}
      >
        {optionIndex + 1}
      </div>

      {/* Option text */}
      <p className="w-fit break-words pl-3 text-lg font-medium dark:text-white">
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
        selectedOption === optionIndex + 1 && (
          <div className=" h-7 w-7">
            <IconIncorrect />
          </div>
        )}
    </li>
  );
};

export default OptionItem;
