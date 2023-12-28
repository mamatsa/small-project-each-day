import { useState, useEffect, useCallback } from "react";

interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

function useTodo() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filterOption, setFilterOption] = useState("All");
  const [filteredTodoList, setFilteredTodoList] = useState<Todo[]>([]);

  // Get saved todos from localstorage
  useEffect(() => {
    try {
      const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
      if (savedTodos.length) {
        setTodoList(savedTodos);
      }
    } catch (error) {
      console.error("Failed to load todos from localStorage:", error);
    }
  }, []);

  // Set updated todos to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  // Counts how many todos are incompleted
  const remainingTodoCount = todoList.reduce((accumulator, currentValue) => {
    if (currentValue.completed) return accumulator;
    else return accumulator + 1;
  }, 0);

  // Add todo
  const handleAddTodo = (todoText: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      value: todoText,
      completed: false,
    };
    setTodoList([newTodo, ...todoList]);
  };

  // Delete todo
  const handleDeleteTodo = (id: string) => {
    setTodoList(todoList.filter((todoList) => todoList.id !== id));
  };

  // Toggle todo completion state
  const handleTodoCompletionToggle = (id: string) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodoList(updatedTodos);
  };

  // Delete all completed todos
  const handleDeleteCompletedTodos = () => {
    setTodoList(todoList.filter((todo) => !todo.completed));
  };

  // Filter todos
  const handleFilterTodos = useCallback(
    (option: string) => {
      setFilterOption(option);
      if (option === "Active") {
        setFilteredTodoList(todoList.filter((todo) => !todo.completed));
      } else if (option === "Completed") {
        setFilteredTodoList(todoList.filter((todo) => todo.completed));
      }
    },
    [todoList],
  );

  // Filter todos on todoList updates
  useEffect(() => {
    if (filterOption !== "All") {
      handleFilterTodos(filterOption);
    }
  }, [filterOption, handleFilterTodos, todoList]);

  const handleReorderTodoList = (reorderedTodoList: Todo[]) => {
    setTodoList(reorderedTodoList);
  };

  return {
    todoList: filterOption === "All" ? todoList : filteredTodoList,
    filterOption,
    remainingTodoCount,
    addTodo: handleAddTodo,
    toggleTodoCompletion: handleTodoCompletionToggle,
    deleteTodo: handleDeleteTodo,
    deleteCompletedTodos: handleDeleteCompletedTodos,
    filterTodos: handleFilterTodos,
    reorderTodoList: handleReorderTodoList,
  };
}

export default useTodo;
