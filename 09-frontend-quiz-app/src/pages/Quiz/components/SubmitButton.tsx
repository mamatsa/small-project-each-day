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
      className="my-3 w-full rounded-xl bg-purple py-4 text-lg font-medium text-white sm:my-4 sm:hover:bg-opacity-70"
      onClick={onQuestionSubmit}
    >
      {correctAnswer ? "Next Question" : "Submit Answer"}
    </button>
  );
};

export default SubmitButton;
