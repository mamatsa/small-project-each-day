import {
  IconMoon,
  TodoItem,
  IconSun,
  FilterSection,
  AddTodoForm,
} from "components";
import { useDarkMode, useTodo } from "hooks";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const {
    todoList,
    filterOption,
    remainingTodoCount,
    addTodo,
    toggleTodoCompletion,
    deleteTodo,
    deleteCompletedTodos,
    filterTodos,
    reorderTodoList,
  } = useTodo();

  // Add todo on form submit
  const handleTodoFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(e.currentTarget.addTodo.value);

    e.currentTarget.addTodo.value = ""; // Clear input field
  };

  // Update todo list after todo drag and drop
  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    reorderTodoList(items);
  }

  return (
    <div
      className={`h-full min-h-screen pb-4 ${
        darkMode ? "dark bg-d-very-dark-blue" : "bg-l-very-light-gray"
      }`}
    >
      <header className="h-[220px] bg-mobile-light bg-cover px-6 py-12 sm:h-[240px] sm:bg-desktop-light dark:bg-mobile-dark dark:sm:bg-desktop-dark">
        <div className="mx-auto flex max-w-screen-sm items-center justify-between">
          <h1 className="text-3xl font-bold leading-none tracking-[0.5rem] text-white">
            TODO
          </h1>
          <button onClick={() => toggleDarkMode(!darkMode)}>
            {darkMode ? <IconSun /> : <IconMoon />}
          </button>
        </div>

        <AddTodoForm onSubmit={handleTodoFormSubmit} />
      </header>

      <div className="relative bg-l-very-light-gray px-6 dark:bg-d-very-dark-blue">
        <div className="relative -top-6 mx-auto max-w-screen-sm overflow-hidden rounded-md shadow-md sm:-top-8">
          {/*Todo list with drag and drop reordering*/}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                  {todoList.map((todo, index) => {
                    return (
                      <Draggable
                        key={todo.id}
                        index={index}
                        draggableId={todo.id}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TodoItem
                              todo={todo}
                              onTodoDelete={deleteTodo}
                              onTodoComplete={toggleTodoCompletion}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>

          {/* Bottom section */}
          <div className="flex justify-between bg-white p-4 text-sm text-l-dark-grayish-blue dark:bg-d-very-dark-desaturated-blue dark:text-d-dark-grayish-blue">
            {/* Uncompleted todo count */}
            <p>{remainingTodoCount} items left</p>

            {/* Filters for desktop viewport */}
            <FilterSection
              filter={filterOption}
              onFilter={filterTodos}
              isDisplayMobile={false}
            />

            {/* Delete all completed todos */}
            <button
              onClick={deleteCompletedTodos}
              className="hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover"
            >
              Clear Completed
            </button>
          </div>
        </div>

        {/* Filters for mobile viewport */}
        <FilterSection
          filter={filterOption}
          onFilter={filterTodos}
          isDisplayMobile={true}
        />

        {todoList.length > 1 && (
          <p className="my-5 text-center text-sm text-l-dark-grayish-blue sm:my-0">
            Drag and drop to reorder list
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
