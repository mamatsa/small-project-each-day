import { useState, useEffect } from "react";
import {
  IconMoon,
  TodoItem,
  IconSun,
  FilterSection,
  AddTodoForm,
} from "components";
import { useTodo } from "hooks";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {
    todoList,
    filterOption,
    remainingTodoCount,
    addTodo,
    toggleTodoCompletion,
    deleteTodo,
    deleteCompletedTodos,
    filterTodos,
  } = useTodo();

  // Set dark theme if it's saved in localstorage or it is system preference
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const handleTodoFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(e.currentTarget.addTodo.value);

    e.currentTarget.addTodo.value = ""; // Clear input field
  };

  return (
    <div
      className={`h-full min-h-screen bg-l-very-light-gray pb-4 ${
        darkMode && "dark bg-d-very-dark-blue"
      }`}
    >
      {/* Header */}
      <div className="h-[220px] bg-mobile-light bg-cover px-6 py-12 sm:bg-desktop-light dark:bg-mobile-dark dark:sm:bg-desktop-dark">
        <div className="mx-auto flex max-w-screen-sm items-center justify-between">
          <h1 className="text-3xl font-bold leading-none tracking-[0.5rem] text-white">
            TODO
          </h1>
          <button
            onClick={() => {
              if (darkMode) localStorage.theme = "light";
              else localStorage.theme = "dark";
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? <IconSun /> : <IconMoon />}
          </button>
        </div>

        <AddTodoForm onSubmit={handleTodoFormSubmit} />
      </div>

      <div className="h-[calc(100%-220px)] bg-l-very-light-gray px-6 dark:bg-d-very-dark-blue">
        <ul className="mx-auto max-w-screen-sm -translate-y-6 overflow-hidden  rounded-md shadow-md">
          {/* Todos */}
          {todoList.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onTodoDelete={deleteTodo}
                onTodoComplete={toggleTodoCompletion}
              />
            );
          })}

          {/* Count incomplete todo and delete all completed button */}
          <div className="flex justify-between bg-white p-4 text-sm text-l-dark-grayish-blue dark:bg-d-very-dark-desaturated-blue dark:text-d-dark-grayish-blue">
            <p>{remainingTodoCount} items left</p>
            <FilterSection
              filter={filterOption}
              onFilter={filterTodos}
              isDisplayMobile={false}
            />
            <button
              onClick={deleteCompletedTodos}
              className="hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover"
            >
              Clear Completed
            </button>
          </div>
        </ul>

        {/* Filters on mobile viewport */}
        <FilterSection
          filter={filterOption}
          onFilter={filterTodos}
          isDisplayMobile={true}
        />
      </div>
    </div>
  );
};

export default App;
