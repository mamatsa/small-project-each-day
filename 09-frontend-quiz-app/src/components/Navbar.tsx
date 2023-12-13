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
}

const quizIcons = {
  HTML: HTMLLogo,
  CSS: CSSLogo,
  JavaScript: JavaScriptLogo,
  Accessibility: Accessibility,
};

const Navbar = ({ quizSubject, onThemeChange }: NavbarProps) => {
  const QuizIcon = quizIcons[quizSubject || "HTML"];

  return (
    <div className="mb-4 flex h-[72px] justify-between">
      <div className="flex items-center gap-4">
        <span className="block h-10 w-10">{quizSubject && <QuizIcon />}</span>
        <p className="text-lg font-medium">{quizSubject}</p>
      </div>
      <ThemeToggle onThemeChange={onThemeChange} />
    </div>
  );
};

export default Navbar;
