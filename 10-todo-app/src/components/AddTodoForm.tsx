interface AddTodoFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
  return (
    <form
      className="relative mx-auto mt-10 max-w-screen-sm"
      onSubmit={onSubmit}
    >
      <div className="absolute bottom-0 left-3 top-0 my-auto h-5 w-5 rounded-full border border-solid border-l-light-grayish-blue sm:left-4 dark:border-d-very-dark-grayish-blue"></div>
      <input
        id="addTodo"
        type="text"
        className="w-full rounded-md py-3 pl-11 text-sm outline-bright-blue sm:pl-14 sm:text-lg dark:bg-d-very-dark-desaturated-blue dark:text-d-light-grayish-blue"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default AddTodoForm;
