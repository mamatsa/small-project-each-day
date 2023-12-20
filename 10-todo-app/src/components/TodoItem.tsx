import { Todo } from "App";
import { IconCheck, IconCross } from "./svgs";

interface TodoItemProps {
  todo: Todo;
  onTodoDelete: (id: string) => void;
  onTodoComplete: (id: string) => void;
}

const TodoItem = ({ todo, onTodoDelete, onTodoComplete }: TodoItemProps) => {
  return (
    <li
      onClick={() => {
        onTodoComplete(todo.id);
      }}
      className="grid grid-cols-[48px_1fr_32px] border-b border-l-dark-grayish-blue bg-white py-4"
    >
      <button
        className={`flex h-5 w-5 items-center justify-center justify-self-center rounded-full border border-solid border-l-light-grayish-blue ${
          todo.completed && "bg-check-gradient"
        }`}
      >
        <div className={`scale-90 sm:scale-100 ${!todo.completed && "hidden"}`}>
          <IconCheck />
        </div>
      </button>
      <p
        className={`text-sm  ${
          todo.completed
            ? "text-l-dark-grayish-blue line-through"
            : "text-l-very-dark-grayish-blue"
        }`}
      >
        {todo.value}
      </p>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onTodoDelete(todo.id);
        }}
      >
        <IconCross />
      </button>
    </li>
  );
};

export default TodoItem;
