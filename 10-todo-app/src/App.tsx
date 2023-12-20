import { useState } from "react";
import { IconCross, IconMoon } from "components";

interface Todo {
  id: string;
  value: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      value: e.currentTarget.addTodo.value,
    };
    setTodos([newTodo, ...todos]);

    e.currentTarget.addTodo.value = "";
  };

  return (
    <div className="h-screen">
      {/* Header */}
      <div className="h-[220px] bg-mobile-light bg-cover px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold leading-none tracking-[0.5rem] text-white">
            TODO
          </h1>
          <button>
            <IconMoon />
          </button>
        </div>
        <form className="relative mt-10" onSubmit={handleSubmit}>
          <div className="absolute bottom-0 left-3 top-0 my-auto h-5 w-5 rounded-full border border-solid border-l-light-grayish-blue"></div>
          <input
            id="addTodo"
            type="text"
            className="w-full rounded-md py-3 pl-12 outline-bright-blue"
            placeholder="Create a new todo..."
          />
        </form>
      </div>

      {/* Todos */}
      <div className="h-[calc(100%-220px)] bg-l-very-light-gray px-6">
        <ul className="-translate-y-6 rounded-md">
          {todos.map((todo) => {
            return (
              <li
                className="grid grid-cols-[48px_1fr_32px] border-b border-l-dark-grayish-blue bg-white py-4"
                key={todo.id}
              >
                <button className="h-5 w-5 justify-self-center rounded-full border border-solid border-l-light-grayish-blue"></button>
                <p className="text-sm text-l-very-dark-grayish-blue">
                  {todo.value}
                </p>
                <button>
                  <IconCross />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
