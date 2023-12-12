interface QuizProps {
  subject: string;
}

const Quiz = ({ subject }: QuizProps) => {
  return <div>{subject}</div>;
};

export default Quiz;
