import { IconSearch } from "./svg";

interface SearchProps {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  return (
    <form action="" className="relative my-7" onSubmit={onSearch}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search..."
        className="w-full rounded-2xl bg-gray-100 px-6 py-[14px] font-bold outline-none ring-purple placeholder:text-gray-300 focus:ring-1 dark:bg-gray-600"
      />
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
