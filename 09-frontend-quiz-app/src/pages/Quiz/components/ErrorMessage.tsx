import { IconIncorrect } from "components";

const ErrorMessage = () => {
  return (
    <p className="text-red flex w-full items-center justify-center gap-2 text-lg">
      <div className="h-7 w-7">
        <IconIncorrect />
      </div>
      Please select an answer
    </p>
  );
};

export default ErrorMessage;
