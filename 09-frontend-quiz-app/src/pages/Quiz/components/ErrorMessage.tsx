import { IconIncorrect } from "components";

const ErrorMessage = () => {
  return (
    <p className="flex w-full items-center justify-center gap-2 text-lg text-red dark:text-white">
      <span className="h-7 w-7">
        <IconIncorrect />
      </span>
      Please select an answer
    </p>
  );
};

export default ErrorMessage;
