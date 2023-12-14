import { Subject } from "App";
import {
  HTMLLogo,
  CSSLogo,
  JavaScriptLogo,
  Accessibility,
  ThemeToggle,
} from "components";

interface NavbarProps {
  quizSubject: Subject;
  onThemeChange: () => void;
  darkTheme: boolean;
}

const quizIcons = {
  HTML: HTMLLogo,
  CSS: CSSLogo,
  JavaScript: JavaScriptLogo,
  Accessibility: Accessibility,
};

const Navbar = ({ quizSubject, onThemeChange, darkTheme }: NavbarProps) => {
  const QuizIcon = quizIcons[quizSubject || "HTML"];

  return (
    <div className="mb-4 flex h-[72px] justify-between lg:h-32">
      <div className="flex items-center gap-4">
        {quizSubject && <QuizIcon />}
        <p className="text-lg font-medium dark:text-white sm:text-xl">
          {quizSubject}
        </p>
      </div>
      <ThemeToggle onThemeChange={onThemeChange} darkTheme={darkTheme} />
    </div>
  );
};

export default Navbar;
