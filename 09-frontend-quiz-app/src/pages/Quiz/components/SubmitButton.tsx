interface SubmitButtonProps {
  onQuestionSubmit: () => void;
  correctAnswer: string;
}

const SubmitButton = ({
  onQuestionSubmit,
  correctAnswer,
}: SubmitButtonProps) => {
  return (
    <button
      className="bg-purple my-3 w-full rounded-xl py-4 text-lg font-medium text-white"
      onClick={onQuestionSubmit}
    >
      {correctAnswer ? "Next Question" : "Submit Answer"}
    </button>
  );
};

export default SubmitButton;
