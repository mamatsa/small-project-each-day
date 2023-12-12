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
      className={`grid w-full grid-cols-[40px_1fr_28px] items-center rounded-xl bg-white p-3 -outline-offset-[3px] ${
        selectedOption === optionIndex + 1 &&
        "outline-purple outline outline-[3px]"
      } ${
        correctAnswer &&
        selectedOption === optionIndex + 1 &&
        "outline-green outline outline-[3px]"
      } ${
        correctAnswer &&
        correctAnswer !== option &&
        selectedOption === optionIndex + 1 &&
        "outline-red outline outline-[3px]"
      }`}
      onClick={() => {
        onOptionSelect(optionIndex);
      }}
    >
      {/* Question Number */}
      <div
        className={`text-gray-navy bg-light-gray flex h-10 w-10 items-center justify-center rounded-md text-lg font-medium ${
          selectedOption === optionIndex + 1 && "bg-purple text-white"
        } ${
          correctAnswer &&
          selectedOption === optionIndex + 1 &&
          "bg-green text-white"
        } ${
          correctAnswer &&
          correctAnswer !== option &&
          selectedOption === optionIndex + 1 &&
          "bg-red"
        }`}
      >
        {optionIndex + 1}
      </div>

      {/* Option text */}
      <p className="w-fit break-words pl-3 text-lg font-medium">{option}</p>

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
