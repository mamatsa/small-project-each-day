import { HTMLLogo, CSSLogo, JavaScriptLogo, Accessibility } from "components";
import { MenuItem } from "./components";
import { Subject } from "App";

interface WelcomeProps {
  onQuizChoose: (subject: Subject) => void;
}

const Welcome = ({ onQuizChoose }: WelcomeProps) => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-light dark:text-white sm:text-5xl">
          Welcome to the
          <span className="block font-medium dark:text-white">
            Frontend Quiz!
          </span>
        </h1>
        <p className="text-sm italic dark:text-light-blue sm:text-lg">
          Pick a subject to get started.
        </p>
      </div>

      <ul className="space-y-3">
        <MenuItem title="HTML" onQuizChoose={onQuizChoose}>
          <HTMLLogo />
        </MenuItem>

        <MenuItem title="CSS" onQuizChoose={onQuizChoose}>
          <CSSLogo />
        </MenuItem>

        <MenuItem title="JavaScript" onQuizChoose={onQuizChoose}>
          <JavaScriptLogo />
        </MenuItem>

        <MenuItem title="Accessibility" onQuizChoose={onQuizChoose}>
          <Accessibility />
        </MenuItem>
      </ul>
    </div>
  );
};

export default Welcome;
