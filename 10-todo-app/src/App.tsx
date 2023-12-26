import { useState, useEffect, useCallback } from "react";
import { IconMoon, TodoItem, FilterButton } from "components";

export interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  // Display filtered todos if filtere is applied
  const displayTodos = filter === "All" ? todos : filteredTodos;

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

    e.currentTarget.addTodo.value = ""; // Clear input field
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

  // Filter todos
  const handleFilter = useCallback(
    (option: string) => {
      setFilter(option);
      if (option === "Active") {
        setFilteredTodos(todos.filter((todo) => !todo.completed));
      } else if (option === "Completed") {
        setFilteredTodos(todos.filter((todo) => todo.completed));
      }
    },
    [todos],
  );

  useEffect(() => {
    handleFilter(filter);
  }, [filter, handleFilter, todos]);

  return (
    <div className="h-screen">
      {/* Header */}
      <div className="h-[220px] bg-mobile-light bg-cover px-6 py-12 sm:bg-desktop-light">
        <div className="mx-auto flex max-w-screen-sm items-center justify-between">
          <h1 className="text-3xl font-bold leading-none tracking-[0.5rem] text-white">
            TODO
          </h1>
          <button>
            <IconMoon />
          </button>
        </div>
        {/* Todo add form */}
        <form
          className="relative mx-auto mt-10 max-w-screen-sm"
          onSubmit={handleSubmit}
        >
          <div className="absolute bottom-0 left-3 top-0 my-auto h-5 w-5 rounded-full border border-solid border-l-light-grayish-blue sm:left-4"></div>
          <input
            id="addTodo"
            type="text"
            className="w-full rounded-md py-3 pl-11 text-sm outline-bright-blue sm:pl-14 sm:text-lg"
            placeholder="Create a new todo..."
          />
        </form>
      </div>

      <div className="h-[calc(100%-220px)] bg-l-very-light-gray px-6">
        <ul className="mx-auto max-w-screen-sm -translate-y-6 overflow-hidden  rounded-md shadow-md">
          {/* Todos */}
          {displayTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onTodoDelete={handleTodoDelete}
                onTodoComplete={handleTodoComplete}
              />
            );
          })}

          {/* Incomplete todo count and delete all completed button */}
          <div className="flex justify-between bg-white p-4 text-sm text-l-dark-grayish-blue">
            <p>{remeaningTodos} items left</p>
            <div className="hidden items-center justify-center gap-3 font-bold sm:flex">
              <FilterButton
                title="All"
                filter={filter}
                onFilter={handleFilter}
              />
              <FilterButton
                title="Active"
                filter={filter}
                onFilter={handleFilter}
              />
              <FilterButton
                title="Completed"
                filter={filter}
                onFilter={handleFilter}
              />
            </div>
            <button onClick={handleCompletedTodoDelete}>Clear Completed</button>
          </div>
        </ul>

        {/* Filters */}
        <div className="mx-auto flex max-w-screen-sm items-center justify-center gap-3 rounded-md bg-white p-4 font-bold text-l-dark-grayish-blue shadow-md sm:hidden">
          <FilterButton title="All" filter={filter} onFilter={handleFilter} />
          <FilterButton
            title="Active"
            filter={filter}
            onFilter={handleFilter}
          />
          <FilterButton
            title="Completed"
            filter={filter}
            onFilter={handleFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
