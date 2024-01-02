import { IconSearch } from "./svg";
import { useState } from "react";

interface SearchProps {
  onSearch: (searchWord: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchWord = e.currentTarget.searchInput.value;
    if (!searchWord) {
      setError(true);
    } else {
      setError(false);
      onSearch(searchWord);
    }
  };

  return (
    <form action="" className="relative my-7 md:my-12" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          onChange={() => setError(false)}
          id="searchInput"
          aria-invalid={error ? "true" : "false"}
          type="text"
          placeholder="Search..."
          className={`w-full rounded-2xl bg-gray-100 px-6 py-[14px] font-bold outline-none placeholder:text-gray-300 md:py-5 md:text-xl dark:bg-gray-600 ${
            error ? "ring-1 ring-red" : "ring-purple focus:ring-1"
          }`}
        />
        {error && (
          <p className="absolute -bottom-7 text-red">Whoops, can’t be empty…</p>
        )}
      </div>
      <button
        type="submit"
        className="absolute bottom-1/2 right-6 translate-y-1/2"
        aria-label="Search"
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default Search;
