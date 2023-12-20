import { IconMoon } from "components";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-mobile-light bg-cover px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold leading-none tracking-[0.5rem] text-white">
            TODO
          </h1>
          <button>
            <IconMoon />
          </button>
        </div>
        <form className="relative mt-10">
          <div className="absolute left-4 top-3 h-5 w-5 rounded-full border border-solid border-l-light-grayish-blue"></div>
          <input
            type="text"
            className="w-full rounded-md py-3 pl-12"
            placeholder="Create a new todo..."
          />
        </form>
      </div>

      {/* Todos */}
      <div></div>
    </div>
  );
};

export default App;
