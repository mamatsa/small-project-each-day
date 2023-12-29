import { Header, Search } from "components";

const App = () => {
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchWord = e.currentTarget.searchInput.value;
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
      );
      const data = await response.json();
      console.log(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <Header />
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;
