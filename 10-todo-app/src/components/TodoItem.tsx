import { IconCheck, IconCross } from "./svgs";

interface TodoItemProps {
  todo: {
    id: string;
    value: string;
    completed: boolean;
  };
  onTodoDelete: (id: string) => void;
  onTodoComplete: (id: string) => void;
}

const TodoItem = ({ todo, onTodoDelete, onTodoComplete }: TodoItemProps) => {
  return (
    <li
      onClick={() => {
        onTodoComplete(todo.id);
      }}
      className="group grid cursor-pointer grid-cols-[44px_1fr_32px] items-center border-b border-l-light-grayish-blue bg-white py-4 sm:gap-2 sm:px-1 dark:border-d-very-dark-grayish-blue2 dark:bg-d-very-dark-desaturated-blue"
    >
      <button
        className={`flex h-5 w-5 cursor-pointer items-center justify-center justify-self-center rounded-full border border-solid border-l-light-grayish-blue sm:group-hover:border-bright-blue dark:border-d-very-dark-grayish-blue ${
          todo.completed && "bg-check-gradient"
        }`}
      >
        <div
          className={`scale-90 rounded-full sm:scale-100 ${
            !todo.completed && "hidden"
          }`}
        >
          <IconCheck />
        </div>
      </button>
      <p
        className={`text-sm sm:text-lg ${
          todo.completed
            ? "text-l-dark-grayish-blue line-through"
            : "text-l-very-dark-grayish-blue dark:text-d-light-grayish-blue"
        }`}
      >
        {todo.value}
      </p>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onTodoDelete(todo.id);
        }}
        className="sm:hidden sm:hover:scale-110 sm:group-hover:block"
      >
        <IconCross />
      </button>
    </li>
  );
};

export default TodoItem;
