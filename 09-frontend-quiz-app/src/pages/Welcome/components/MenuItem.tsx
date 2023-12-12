interface MenuItemProps {
  title: string;
  onQuizChoose: (subject: string) => void;
  children: React.ReactNode;
}

const MenuItem = ({ title, onQuizChoose, children }: MenuItemProps) => {
  return (
    <li
      className="flex items-center gap-4 rounded-xl bg-white p-3"
      onClick={() => {
        onQuizChoose(title);
      }}
    >
      <div className="h-10 w-10">{children}</div>
      <span className="text-lg font-medium">{title}</span>
    </li>
  );
};

export default MenuItem;
