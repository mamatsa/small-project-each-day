import { useState } from "react";
import { IconMoon, TodoItem } from "components";

export interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Counts how many todos are incompleted
  const remeaningTodos = todos.reduce((accumulator, currentValue) => {
    if (currentValue.completed) return accumulator;
    else return accumulator + 1;
  }, 0);

  // Add todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      value: e.currentTarget.addTodo.value,
      completed: false,
    };
    setTodos([newTodo, ...todos]);

    e.currentTarget.addTodo.value = "";
  };

  // Delete todo
  const handleTodoDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Complete todo
  const handleTodoComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Delete all completed todos
  const handleCompletedTodoDelete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
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
        <ul className="-translate-y-6 overflow-hidden rounded-md shadow-md">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onTodoDelete={handleTodoDelete}
                onTodoComplete={handleTodoComplete}
              />
            );
          })}

          <div className="flex justify-between bg-white p-4 text-sm text-l-dark-grayish-blue">
            <p>{remeaningTodos} items left</p>
            <button onClick={handleCompletedTodoDelete}>Clear Completed</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default App;
